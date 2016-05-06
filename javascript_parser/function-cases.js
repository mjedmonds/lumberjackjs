// function examples

function func1() { emit_obj.emit('func1Emit');};
var func2 = function () { emit_obj.emit('func2Emit');};
var func3 = function func3_1() { emit_obj.emit('func3Emit'); };

(function func4() { emit_obj.emit('func4Emit'); });
(function () { emit_obj.emit('anon0Emit'); });

// var func5 = function func5_1() {(function () { emit_obj.emit('func5Emit'); );
// }();
// var func6 = function () {(function () { emit_obj.emit('func6Emit'); });
// }();

var obj1 = { func7: function func7_1(){(function () {emit_obj.emit('func7Emit');});
} };
var obj2 = { func8: function (){(function () {emit_obj.emit('func8Emit');});
} };

function counter1() {
  var count1 = 0;
  return function c1() {
    emit_obj.emit('c1Emit');
    alert(count1++);
  }
}

function counter2() {
  var count2 = 0;
  return function() {
    emit_obj.emit('c2Emit');
    alert(count2++);
  }
}

var func9 = (emit_obj) => { emit_obj.emit('func9Emit'); };
var func10 = (emit_obj) => emit_obj.emit('func10Emit');

// var func11 = new Function();
// var func12 = new Function.apply(this);
//
// Function.apply(this).apply(this);
//
// //example of emit
// var emittingFunc = function () {
//   a = 5 + 2;
//   emit_obj.emit('emmitFuncEmit');
// }
//
// // example of listener
// server.on('connection', (stream) => {
//   console.log('someone connected!');
// });
