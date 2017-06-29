// typing effect logic
var Typer2 = {
  
  text: null, // the text container

  index: 0, // current cursor position
  speed: 2, // how many characters to process at each time from the txt file
  file: "", 

  init: function() {
    // get the text file
    $.get(Typer2.file, function(data) {
      Typer2.text = data;
      Typer2.text = Typer2.text.slice(0, Typer2.text.length - 1);
    });
  },

  // get console content
  content: function() {
    return $(".console").html();
  },

  // append to console content
  write: function(str) {
    $(".console").append(str);
    return false;
  },

  addText: function(key) {
    // if text is loaded
    if (Typer2.text) {
      // if the last char is the blinking cursor
      if (Typer2.content().substring(Typer2.content().length - 1, Typer2.content().length) == "_") {
        // remove it before adding the text
        $(".console").html($(".console").html().substring(0, Typer2.content().length - 1));
      }

      // if key is not backspace
      if (key.keyCode != 8) {
        // add to the index the speed
        Typer2.index += Typer2.speed;
      } else {
        // else if index is not less than 0
        if (Typer2.index > 0) {
          // remove speed for deleting text
          Typer2.index -= Typer2.speed;
        }
      }

      // replace newline chars with br, tabs with 4 space and blanks with an html blank
      $(".console").html(Typer2.text.substring(0, Typer2.index).replace(new RegExp("\n", "g"),"<br/>"));
    }
  },

  // append to console
  append: function(command) {

    // save it in Typer2.text
    Typer2.text = command;

    $(".console").append(Typer2.text);

    var t = new Timeout(function () {
      $(".console").html($(".console").html().substring(0, Typer2.content().length - Typer2.text.length));
    }, 1000);
  }
}

function Timeout(fn, interval) {
  
  var timeoutID = setTimeout(fn, interval);
  this.cleared = false;
  this.clear = function () {
    this.cleared = true;
    clearTimeout(timeoutID);
  };
}

function startInterval(interval) {
  intervalID = setInterval(function() {
    Typer2.addText({"KeyCode": 123748});
    if (Typer2.text && Typer2.index > Typer2.text.length) {
      clearInterval(intervalID);
      $.getScript("/js/links.js", function() {
        console.log("Injected hrefs.");
      });
    }
  }, interval);
}

function newInterval(interval, id) {
  // clear the existing interval
  clearInterval(id);
  // start a new one
  startInterval(interval);
}

// initializes Typer2
// step is an integer; determines how many letters will be processed at a time
// file is the path to .txt file "/txts/filename.txt"
// speed is an integer; determines typing speed
function initTyper(step, file, speed) {
  Typer2.speed = step;
  Typer2.file = file;
  Typer2.init();

  startInterval(speed);
}