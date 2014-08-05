/*!
 name: utility
 feature: client/server, localStorage, database, oritation Detect, getURLPara, String/JSON, publish/subscribe/fetch, getLocation
 client: Tg31
 author: Vito Tang
 requires: jquery
 */
define(['jquery'], function($) {
    return {
        init: function (settings){
            UtliFn.config = {
                $innerHei: window.innerHeight,
                $innerWid: window.innerWidth,
                $lat: 0,
                $lng: 0,
                $is_Client: true,
                $is_Server: false
            };
            $.extend(UtliFn.config, settings);
            UtliFn.setup();
            return this;
        },
        setup: function(){
            //this.getLocation();
            /*
             //this.openDatabase('mobDB'); //create database
             this.executeSQL("create table tbl_user (id , fname, lname)", null);
             this.executeSQL("insert into tbl_user (id, fname, lname) values (1, 'John', 'Smith')", null);
             this.executeSQL("insert into tbl_user (id, fname, lname) values (2, 'Eric', 'Jackson')", null);
             this.executeSQL("insert into tbl_user (id, fname, lname) values (3, 'Peter', 'Lee')", null);
             this.executeSQL("insert into tbl_user (id, fname, lname) values (4, 'Paul', 'Don')", null);
             this.executeSQL("insert into tbl_user (id, fname, lname) values (5, 'Jack', 'Winfield')", null);
             this.executeSQL("insert into tbl_user (id, fname, lname) values (6, 'Lucas', 'King')", null);
             this.executeSQL("insert into tbl_user (id, fname, lname) values (7, 'Sam', 'Din')", null);
             this.executeSQL("insert into tbl_user (id, fname, lname) values (8, 'Lily', 'Brenned')", null);
             this.executeSQL("insert into tbl_user (id, fname, lname) values (9, 'Michael', 'Young')", null);
             this.executeSQL("insert into tbl_user (id, fname, lname) values (10, 'Cindy', 'Wi')", null);
             this.executeSQL("insert into tbl_user (id, fname, lname) values (10, 'Wendy', 'Latt')", null);
             this.executeSQL("create table tbl_task (id unique, userid, task)", null);
             this.executeSQL("insert into tbl_task (id, userid, task) values (1, 3, 'create database')", null);
             //this.executeSQL("drop table tbl_user", null); //delete table
             //this.executeSQL("update tbl_user set fname = 'Michael' where id = 9", null);
             //this.executeSQL("update tbl_task set userid = 9 where id = 1", null);
             //this.executeSQL("", this.showResult()); //get row data from DB
             //this.executeSQL("", this.showTask()); //get row data from DB
             */
        },
        yell: function(str){
            console.log(str);
        },
        getLocation: function(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function (position) {
                    console.log("lat: " + position.coords.latitude + " | lng: " + position.coords.longitude);
                });
            } else {
                console.log("Browser not supported");
            }
        },
        StringtoJSON: function(text){
            var sJon = JSON.parse(text);
            return sJon;
        },
        JSONtoString: function(data){
            var jStr = JSON.stringify(data);
            return jStr;
        },
        openDatabase: function(DBName){
            db = openDatabase(DBName, '1.0', 'Markian Database', 2 * 1024 * 1024); //2MB
        },
        executeSQL: function(sql, fn){
            db.transaction(function (tx) {
                tx.executeSql(sql, [], fn, this.onDBError);
            });
        },
        onDBError: function(tx, error){
            console.log(error.message);
        },
        /*showResult: function(){
         db.transaction(function (tx) {
         tx.executeSql('select * from tbl_user', [], function (tx, data) {
         var len = data.rows.length;
         var i = 0;
         for (i = 0; i < len; i++) {
         console.log("id fname lname");
         console.log(data.rows.item(i).id+", "+data.rows.item(i).fname+", "+data.rows.item(i).lname);
         }
         });
         });
         },
         showTask: function(){
         db.transaction(function (tx) {
         tx.executeSql('select * from tbl_task left outer join tbl_user on tbl_task.userid = tbl_user.id', [], function (tx, data) {
         var len = data.rows.length;
         var i = 0;
         for (i = 0; i < len; i++) {
         console.log("uid fname  lname tid task");
         console.log(data.rows.item(i).userid + ",  " + data.rows.item(i).fname + ", " + data.rows.item(i).lname + ",  " + data.rows.item(i).id + ",  " + data.rows.item(i).task);
         }
         });
         });
         },*/
        oritationdetect: function(e){
            if(window.orientation == 0){
                //oritation portrait

            }else{
                //oritation landscape

            }
        },
        redirect: function(url){
            window.location.href = url;
            //window.location.replace(url);
        },
        getURLParameter: function(name) {
            return decodeURI(
                (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
            );
        },
        shout: function(feature, data){
            $.publish(feature, data);
        },
        listen: function(feature, callback){
            $.subscribe(feature, callback);
        },
        setlocalstorage: function(k,v){
            localStorage.setItem(k,v);
        },
        getlocalstorage: function(k){
            return localStorage.getItem(k);
        },
        movelocalstorage: function(k){
            localStorage.remove(k);
        },
        clearlocalstorage: function(k){
            localStorage.clear();
        }

    }
});
