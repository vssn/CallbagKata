const expect = require('expect');

function bag(type, payload) {
	this.handle = null;
  this.talkback = null;

	switch(type) {
  	case 0:
    	// greet
      this.talkback = payload;
      this.handle = setTimeout(() => this.talkback(), 1000)
      break;
    case 1:
    	// normal
      console.log(payload);
      break;
    case 2:
    	// unsubscribe
      clearTimeout(this.handle);
  }
}

bag(0, () => {
	console.log("Register");
  bag(1, "Data");
})
