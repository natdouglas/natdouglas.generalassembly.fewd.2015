//FUNCTIONS
function buildCategorySelect(selectedCategoryId) {
    // send request to server
    $.getJSON('http://localhost:3000/categories').done(function(response) {
        // clear any existing categories
        $('select[name="category"]').empty();

        //create descriptive option that user cannot select
        $('select[name="category"]').append('<option value="select" disabled>Please select a category</option>');

        // loop through response and populate categories
        for(var i = 0; i < response.length; i++) {
            $('select[name="category"]').append('<option value="' + response[i].id + '">'+response[i].name + '</option>');
        }
    });
}

function buildTaskList() {  //build nested list of categories and associated tasks
    // send request to server
    $.when(   //will wait until all requested data ready
        $.getJSON('http://localhost:3000/categories'),
        $.getJSON('http://localhost:3000/tasks')
    ).then(function(categoryList,taskList) { //build list
        // console.log(categoryList[0][0].name);
        // console.log(taskList);

        //clear existing tasks and categories
        $('.task-list').empty();        

        //loop through to generate list; start with categories
        for(var i = 0; i < categoryList[0].length; i++) { //use [0] to get to data; working with an array that is 2 levels deep
            $('.task-list').append('<li>'+categoryList[0][i].name + '<ul data-categoryId="'+categoryList[0][i].id+'"></ul></li>');
        }
        // create task list items and add a link for delete
        for (var j = 0; j < taskList[0].length; j++) {
            $('.task-list ul[data-categoryId="' + taskList[0][j].category.id + '"]').append('<li>' + taskList[0][j].name + ' <a href="#" class="delete" data-taskId="'
                +taskList[0][j].id + '">Delete</a></li>'); //ul[data-categoryId=" will match back to category; instead of needing nested for loop
        }
    });
}

function deleteTask(deleteID) { //remove from UI and data source
    $.ajax({
        url: 'http://localhost:3000/tasks/' +deleteID,
        contentType: 'application/json',
        method: 'delete'
    }).done(function(response) {
        buildTaskList();
    });
}


//EVENTS
$(window).bind('load', function(e){
    // stop the page from trying to reload
    e.preventDefault();

    //generate category/task definition list
    buildCategorySelect();
    buildTaskList();
});

// create category
$('.category-form').on('submit', function(e) {
    e.preventDefault();

    // build params object from form fields
    var params = {
        name: $('.category-form input[name="category"]').val().trim()
    };

    //find out if category already exists
    $.when(
        $.getJSON('http://localhost:3000/categories')
    ).then(function(categoryList) { //review existing categories before inserting
        var catExist=0; //use to see if category already exists.  Set now just in case there are no categories in datasource
        for(var i=0; i<categoryList.length; i++){
            if(categoryList[i].name.toLowerCase()===params.name.toLowerCase()) { //category exists
                catExist=1;
                break; //no need to continue looping
            }
        }
        if(catExist===0) { //category is new, therefore create and display in task list
            // send request to server
            $.ajax({
                url: 'http://localhost:3000/categories',
                data: JSON.stringify(params),
                contentType: 'application/json',
                method: 'post'
            }).done(function(response) {
                buildCategorySelect(response.id);
                buildTaskList();
            });
        }
        else { //display error message
            alert('WARNING: ' +params.name +' already exists. Please try again.');
        }
    });
    // clear form field
    //$('.category-form input[name="category"]').val('');
    this.reset();
});

// create task
$('.task-form').on('submit', function(e) {
    e.preventDefault();

   // build params object from form fields
    var params = {
        name: $('.task-form input[name="task"]').val().trim(),
        category: $('.task-form select[name="category"]').val()
    };

    //find out if category already exists
    $.when(
        $.getJSON('http://localhost:3000/tasks')
    ).then(function(taskList) { //review existing tasks before inserting
        var tskExist=0; //use to see if task already exists.  Set now just in case there are no tasks in datasource
        for(var i=0; i<taskList.length; i++){
            if((taskList[i].name.toLowerCase()===params.name.toLowerCase()) && (taskList[i].category.id==params.category.toString())) { //task/category combo exists
                tskExist=1;
                var catName=taskList[i].category.name; //grab category name while in taskList for
                break; //no need to continue looping
            }
        }
        if(tskExist===0) { //task/category combo is new, therefore create and display in task list
            // send request to server
            $.ajax({
                url: 'http://localhost:3000/tasks',
                data: JSON.stringify(params),
                contentType: 'application/json',
                method: 'post'
            }).done(function(response) {
                buildTaskList();
            });
        }
        else { //display error message
            alert('WARNING: ' +params.name +' already exists in the category ' +catName +'. Please try again.');
        }
    });
    // clear form field
    //$('.task-form input[name="task"]').val('');
    this.reset();
});

//click task for deletion; on load, can add click event on the parent object <ul class="task-list"></ul>; add event delegation to a higher element since list objects do not exist yet
$('.task-list').on('click', 'a.delete', function(e) { //hone click event inside a delete class within a
    e.preventDefault();

    //get ID of task clicked
    var deleteID=$(e.target).attr('data-taskId');

    //strikethrough LI text and allow fade out before deleting
    //using callback function to ensure effect completes first
    $(this).parent().css('textDecoration','line-through').fadeOut(1000, function() {
        //delete the task ID; function will rebuild the task list
        deleteTask(deleteID);
    });
});

//remove completed tasks
$('.remove-completed').on('click', function(e) {
    e.preventDefault();
    
    //loop completed tasks and pass to delete
    $.when(   //will wait until all requested data ready
        $.getJSON('http://localhost:3000/tasks')
    ).then(function(taskList) { 
        for(var i = 0; i <taskList.length; i++) {
            if(taskList[i].status===2) {
                //strikethrough LI text and allow fade out before deleting
                //using callback function to ensure effect completes first
                var deleteID=taskList[i].id;
                $('.delete[data-taskId="' +taskList[i].id +'"]').parent().css('textDecoration','line-through').fadeOut(1000, function() {
                    //delete the task ID; function will rebuild the task list
                    deleteTask(deleteID);
                });  
            }
        }
    });
});