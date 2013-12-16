define(function () {

    function pages() {
        return {
            list: 'path/to/list',
            posts: 'path/to/posts' 
        };
    }

    function forms() {
        return {
            list: 'path/to/list',
            posts: 'path/to/posts'
        };
    }

    return {
        pages: pages,
        forms: forms
    };

});