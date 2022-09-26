function ping(delay, callback) {
    if (typeof delay === 'function') {
      callback = delay;
      delay = 0;
    }
      
    try {
      delay = parseInt(delay, 10);
      if (delay > 3) {
        setImmediate(function() {
          console.log('delay should not greater than 3: ' + delay);
        })
      } else {
        setTimeout(function() {
            console.log('pong');
        }, delay * 1000);
      }
    } catch (err) {
      setImmediate(function() {
        console.log(err);
      });
    }
}

ping(4, () => {
    console.log('This is call back')
})