import Reflux from 'reflux'
import $ from 'jquery'

import PeopleActions from '../actions/PeopleActions.js'

let PeopleStore = Reflux.createStore({
  listeneables: PeopleActions,
  fetchPeople: function(){
    let self = this
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json'
    })
    .done(function(people){
      let auxp = people.results
      console.log(auxp)
      self.trigger(auxp)
    })
  }
})

export default PeopleStore