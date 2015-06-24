# Writing the markdown filter
1. require marked in the filters.js which was where were writing a function involking it
2. add swig filter stuff to filter.js where marked was being called
	- markedFilter.safe = true;
  	- swig.setFilter('marked', markedFilter); 

# Implmenting the markdown filter
3. made sure that swig template variable is in html  ~  syntax {{ content | function}}
4. from the page where you are rendering markdown text 
	- require swig  ~  var swig = require('swig');
	- pass swig (the template engine) to the filter  ~  require('../filters')(swig);
