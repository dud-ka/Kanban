$(function() {
	// select random string
  function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var str = '';
    for (i=0; i < 10; i++) {
      str += chars[Math.floor(Math.random() * chars.length)]
    }
    return str;
  }
  // END select random string
  // Column stuff
  function Column(name) {
    var self = this;

    this.id = randomString();
    this.name = name;
    this.$element = createColumn();

    function createColumn() {
      //column elements
      var $column = $('<div>').addClass('column col-4');
      var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
      var $columnCardList = $('<ul>').addClass('column-card-list');
      var $columnDelete = $('<button>').addClass('btn-delete').text('x');
      var $columnAddCard = $('<button>').addClass('add-card').text('Add card'); //czy na początku każdej zmiennej musi być "$" ?

      //column events
      $columnDelete.click(function() {
        self.removeColumn();
      });
      $columnAddCard.click(function() {
        self.addCard(new Card(prompt("Wpisz nazwę karty")));
      });
      
      //column construction
      $column.append($columnTitle)
            .append($columnDelete)
            .append($columnAddCard)
            .append($columnCardList);

      return $column;

      
    }
  }
  Column.prototype = {
    addCard: function(card) {
      this.$element.children('ul').append(card.$element);
    },
    removeColumn: function() {
      this.$element.remove();
    }
  }
  //END Column stuff
  //Card stuff
  function Card(description) {
    var self = this;

    this.id = randomString();
    this.description = description;
    this.$element = createCard();

    function createCard() {
      //card elements
      var $card = $('<li>').addClass('card');
      var $cardDescription = $('<p>').addClass('card-description').text(self.description);
      var $cardDelete = $('<button>').addClass('btn-delete').text('x');

      //card events
      $cardDelete.click(function(){
        self.removeCard();
      });

      //card construction
      $card.append($cardDelete)
            .append($cardDescription);
      return $card;
    }
  }
  Card.prototype = {
    removeCard: function() {
      this.$element.remove();
    }
  }
  //END card stuff
  //Board
  var board = {
    name: 'Kanban board',
    addColumn: function(column) {
      this.$element.append(column.$element);
      initSortable();
    },
    $element: $('#board .column-container')
  };

  function initSortable() {
    $('.column-card-list').sortable({
      connectWith: '.column-card-list',
      placeholder: 'card-placeholder'
    }).disableSelection();
  }

  $('.create-column')
  .click(function(){
   var name = prompt('Wpisz nazwę kolumny');
   var column = new Column(name);
   board.addColumn(column);
 });
  //END BOARD
 // columns create
 var todoColumn = new Column('TO DO');
 var doingColumn = new Column('DOING');
 var doneColumn = new Column('DONE');

// add columns to the board
board.addColumn(todoColumn);
board.addColumn(doingColumn);
board.addColumn(doneColumn);

// create new cards
var card1 = new Card('New task');
var card2 = new Card('Create Kanban Board');

// add cards to columns
todoColumn.addCard(card1);
doingColumn.addCard(card2);
});

