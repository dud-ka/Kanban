$(function() {
	// select random string
  var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
  var str = '';
  for (i=0; i < 10; i++) {
    str += chars[Math.floor(Math.random() * chars.length)]
  }
  return str;
  // END select random string
  // Column stuff
  function Column(name) {
    var self = this;

    this.id = randomString();
    this.name = name;
    this.$element = createColumn();

    function createColumn() {
      //column elements
      var $column = $('<div>').addClass('column');
      var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
      var $columnCardList = $('<ul>').addClass('column-card-list');
      var $columnDelete = $('<button>').addClass('btn-delete').text('x');
      var $columnAddCard = $('<button>').addClass('add-card').text('Dodaj kartę'); //czy na początku każdej zmiennej musi być "$" ?

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

      Column.prototype = {
        addCard: function(card) {
          this.$element.children('ul').append(card.$element);
        },
        removeColumn: function() {
          this.$element.remove();
        }
      };
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

      Card.prototype = {
        removeCard: function() {
          this.$element.remove();
        }
      }
    }
  }
  //END card stuff
})
