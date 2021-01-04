(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("30101c6c-d3dc-441c-a9dd-38edaf76182f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '30101c6c-d3dc-441c-a9dd-38edaf76182f' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"ee782d46-66a5-4d0d-bb87-03bc60140bcd":{"roots":{"references":[{"attributes":{"children":[[{"id":"2399"},0,0],[{"id":"2325"},1,0],[{"id":"2369"},1,1]]},"id":"2471","type":"GridBox"},{"attributes":{"axis":{"id":"2377"},"ticker":null,"visible":false},"id":"2380","type":"Grid"},{"attributes":{},"id":"2446","type":"BasicTickFormatter"},{"attributes":{"data":{"X":[1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021],"bottom":{"__ndarray__":"AAAAAAD4LUBLS0tLS/8uQMqD8HafPCxAlNdQXkP5LkCi2b3LRIguQLb5coBlmyxA6Eqm+qqSK0CU11BeQ3ktQIwuuuiiEy1AYIEFFliMJUDWErm/teQsQCOQayKQqypAG/WdjfrOKkATl6fp8XIqQIOYXEFMritAsPiKr/jKKkB8ybSe/nUqQDo5OTk5uStAAAAAAAAAKUCL0vjIBHorQAbCSDtWYCtAh2EYhmGYKkB48wjVZxosQN7OkJi3EytArKRRbblKKkA3mf0wslkoQO90PeCm3idAErazhYTtJUD1j4YaQPAmQLJL5X4YsiVA1g59yiXgJUAjJ3vhLOskQFnIQhaykCVAgdkDZg+YJUAaxXGtKMAlQNBwUvflsSVA6npKBcdbJkCJqcRUYiolQL6N/lBIriVA4870SHK/JUAqj/stZG0lQMe7THM5kCVAHExfBHN7JUDjhjxuyOMkQOmiiy666CZA4MYyKBUmJkBKsj7OR1smQNjY2NjYuCZAQdRPK8CVKECO+s5GfWcnQOKSIVhHmydANDMzMzNjJkBi6yyNckMlQGZQm9Wo1iNAUKHkY0sFJ0Ag01lhby8oQMdpnMZpDCpAF7UQ88e3KECXUAJ4QIwnQJfxT2bYvChAGeQVD4sWKUD6cmP8A+MoQAzDMAzDMChAXnXvkKgCKUCSJEmSJMkqQAhXFLaedSlA/t2aUhx3KkC4kVie87QpQD2u4p8ijClAyk7QUCYYKEBcYHvb3yApQN1ginzWDSpAX9rpLtnQKUDh/+uhMJwrQFsNXSr7OixAUAd1UAflLECe53me5/ktQFuwBVuwZTBA2VSpkZANMEDbtm3btm0wQNBRgS+ufjBAO7ETO7ETMkA=","dtype":"float64","order":"little","shape":[82]},"hqs":{"__ndarray__":"hI1H8wdbM0AAAAAAAMAyQJzACZzACTRAjC666KL3MEAf8Af8AX8wQOrJ+O1SlzBAbzBFPusGMUBuuUoa1VYyQBA++OCDJzFAHEyRz7rBMECp+/w+mE0yQMqImLbYmTFAzDvgSNEQMkBJkiRJktwwQJLFakKi/jJAW2uttda6MkC+WhuryZ8xQJx3JPLMeTJAAAAAAAAwMUCrqqqqqqozQLRuMEU+6zJA7Lqu67q+MkDMzMzMzGQyQDfvU1wyBDNAAAAAAADgMEB877333rswQO5fiJnHZjBA6aKLLrroLkD44uoHHRUwQJ7YiZ3YiS9AG8prKK9JLkDfKk3xS6IsQBA++OCDSy5AVVVVVVVVLkCttdZaa60tQE5vetOb3ixAPIIqAlDbLkA7MNcOzF0rQBQh4hz3MzBAguUcL+XDLUDtFn41JtIuQAgld4oWzixAE1O7StaGLkBZyEIWspAtQDiEQziEQzBABw4cOHCAL0Dbtm3btm0vQKuqqqqqqjBAMzMzMzPzMEDlF0t+seQvQKuqqqqqqi9AVgyU8EZTL0ByHMdxHMcrQAW4rbLflSdAFYpbobgVLUDotIFOG6gsQD436FSUnC1AibfCoYl8LEBNernUN8ssQKc3velN7y1ALb6HRoEqL0Ce+AWkxxctQHjhIHp8Fy5AK+Q+v8QhL0Ab9Z2N+s4wQEeVwwE4MjBACBrYTSclMEBKJGnGmnkvQDvUFATZji5AEGxFLb5YL0BptgfVykwvQEjhehSuxzBAzczMzMyMMEBRUFBQUKAwQIaZfcZ+ajBAv7VE7m9tMUBwPsEkoXwzQKuqqqqqaDRAv56YjUbgNEBVVVVVVVU1QI7jOI7jODZAWPuGtW9YN0A=","dtype":"float64","order":"little","shape":[82]},"invshade":["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#000000"],"lqs":{"__ndarray__":"AAAAAAD4LUBLS0tLS/8uQMqD8HafPCxAlNdQXkP5LkCi2b3LRIguQLb5coBlmyxA6Eqm+qqSK0CU11BeQ3ktQIwuuuiiEy1AYIEFFliMJUDWErm/teQsQCOQayKQqypAG/WdjfrOKkATl6fp8XIqQIOYXEFMritAsPiKr/jKKkB8ybSe/nUqQDo5OTk5uStAAAAAAAAAKUCL0vjIBHorQAbCSDtWYCtAh2EYhmGYKkB48wjVZxosQN7OkJi3EytArKRRbblKKkA3mf0wslkoQO90PeCm3idAErazhYTtJUD1j4YaQPAmQLJL5X4YsiVA1g59yiXgJUAjJ3vhLOskQFnIQhaykCVAgdkDZg+YJUAaxXGtKMAlQNBwUvflsSVA6npKBcdbJkCJqcRUYiolQL6N/lBIriVA4870SHK/JUAqj/stZG0lQMe7THM5kCVAHExfBHN7JUDjhjxuyOMkQOmiiy666CZA4MYyKBUmJkBKsj7OR1smQNjY2NjYuCZAQdRPK8CVKECO+s5GfWcnQOKSIVhHmydANDMzMzNjJkBi6yyNckMlQGZQm9Wo1iNAUKHkY0sFJ0Ag01lhby8oQMdpnMZpDCpAF7UQ88e3KECXUAJ4QIwnQJfxT2bYvChAGeQVD4sWKUD6cmP8A+MoQAzDMAzDMChAXnXvkKgCKUCSJEmSJMkqQAhXFLaedSlA/t2aUhx3KkC4kVie87QpQD2u4p8ijClAyk7QUCYYKEBcYHvb3yApQN1ginzWDSpAX9rpLtnQKUDh/+uhMJwrQFsNXSr7OixAUAd1UAflLECe53me5/ktQFuwBVuwZTBA2VSpkZANMEDbtm3btm0wQNBRgS+ufjBAO7ETO7ETMkA=","dtype":"float64","order":"little","shape":[82]},"m50":{"__ndarray__":"7BKJ6xLdikBDBmBZY4SKQOmiiy66SIlAmIhC1WwNiUCcXHxsdNCIQAAAAAAAaohAsCQ+bQfbhkAAAAAAAGSJQIsuuuii24hAKqMyKqP2hUCkWH7rNACJQC1PItOwZYdAMOgL+oKeh0B4OQUvpwCGQCGEEEII8YdAurm5ubmpiEAY2OHvpziHQFu/UqDWT4hAN5yKG9WYhkCrqqqqqgqKQLWX0F5Cd4lAupqruZr7iED2bNbqcjuJQKyjzfsUl4hAhixkIQvZhUBM9EGHVkiGQAxhJ4ssc4VA4iRO4iTWg0CiM1ihM7iEQGgxncV0doNA+9liZfgmg0ChvIbyGuqCQIaTui+PzYJAaoTlnkYYg0AZY4wxxiCDQOvZIXBjuYJAwzAMw7C1gkBXLYjzoBKCQMJyTyMs94JAhg7Y7bHWgkAz+8IhzuCBQCJoOKn7goJAhh/VJWY1hEC95UitiruCQHQ/93M/V4VA/LoWu42Gg0BWVVVVVdWEQLrooosuuoZAFV67hHkAh0DEw8PDwyOFQLTFyvCNqIVA/aGQXMBrg0CrqqqqqlKCQAAAAAAAQ4BAJDS0DrXlhEDpoosuupiEQAAAAAAA4IVANBrJxJGvhEDvgbU8mEWEQFIxJ15Y7IRASpIkSZJ8hUDGyvCNKMCEQMkmm2yyyYRAi4uS0QjyhUA5juM4jhuHQJdv+ZZvCYdA1hi1SmrIhkAAAAAAAOCFQNZL+3ZU9IVAFfmsG0wlhUA3velNb5qFQCawaT9ZgodA33vvvfcmhkDMTjlY+uOGQEorhP2Z7IdA/JPaW2SKiEDTL/3SL52KQOY1lNdQU4xA9bmyEZM+jEDzLd/yLT+NQGe38KsxUY5AAAAAAABAj0A=","dtype":"float64","order":"little","shape":[82]},"meds":{"__ndarray__":"ylPxyVMxMUCwS+GAkfgwQC+66KKLLjBABfG5kpcIMEDw3OZhJMMvQAAAAAAAQC9AFbSrL1FBLUAAAAAAAEAwQNFFF1100S9A0Pmcz/kcLEBzV2XeIQAwQCUyDdvN8i1Aj7gj7og7LkAKXk7ByyksQKWUUkoppS5AkpGRkZGRL0CaFCHhKLktQHTgklyDHi9AHiTQ5ZXsLECrqqqqqqowQMao4W9TTDBApl/6pV/6L0Atg2obDCYwQC4ZgnW0eS9AwC6pfBj3K0CABe55jYUsQBAgUeWzdCtAQAZkQAZkKUDPYIXOYIUqQJnOYjqL6ShAiQKTTs2DKEBeQ3kN5TUoQCd1Xx5bEShA5A8HPP5wKEB877333nsoQLIMSoWJ9ydA+gB2xs3yJ0Ci05myFSInQO5phOWeRihAwG6PtQwdKEDb+V+HT+ImQNBwUvflsSdAWiigY/PdKUC0lj4bS/onQA/1UA/1UCtALpMxDib+KECrqqqqqqoqQBdddNFFFy1AqoI3Yj9xLUAPDw8PDw8rQAUmnZoHuStARCG5gNfbKEB02kCnDXQnQHE9Ctej0CRAQi7SEqC/KkBddNFFF10qQAAAAAAAACxAGuQVL1R6KkB6AjBirvIpQLAB1jAfyCpApiHnPruAK0DKDdgRkI8qQJtavKnFmypAS/ohhxUXLEA/6ZM+6ZMtQMy3fMu3fC1A1PZD0H0pLUAAAAAAAAAsQBw4BLcFGixA3RUlQgURK0B605ve9KYrQHjhIHp8Fy5AW2uttdZaLECVg6WPxUwtQPj5dW19ny5AGgUiOHZpL0CHcAiHcAgxQA7lNZTXIDJAsb4BU5ETMkB9y7d8y7cyQGtMpAcqZzNAAAAAAAAANEA=","dtype":"float64","order":"little","shape":[82]},"name":["Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere"],"shade":{"__ndarray__":"g5ox6Sc6mj+JEKNiE16bP1Mv7WDWiJA/iRCjYhNeaz8AAAAAAAAAAIDfeCwyqJk/aQezRoQYpT9h1ogQo2KDP4DfeCwyqJk/eK5O9lDylz9185U5W2CnP3tpB7NGhKg/rJM9lPyFtT9vfSTAbzymP0eEGBWb8Lo/ON18Zc4WuD8eiwxqxqS/PxYZ1IxJP8E/wLBKvbSDuT+0xGfK3Tu3P2SRQc2Y9MM/eK5O9lDytz9185U5W2DHP0t8pty9c8U/eK5O9lDyxz//gRxON1+5P9oCu7i89cE/o2ITXhvQwz80pOD2D+TAPwN6qhVa4sM/2MXlrY8EyD9ON1+ZswXGPxDkcLr5ysw/BjVj0k90xD9xeesjAX7TP7VCS3ym3M0/M2cL7OLyxj+DmjHpJzrKPy3xmXL3zrU/sIvLWx8JwD/geCwyqBmzP5sx6Sc6GrI/kUHNmPQTrT9kkUHNmPSjPwezRoQYFas/2gK7uLz1sT/2UPIXVqmnP9SMST/R0aA/cjjdfGXOpj+YdjBrRIixP6YdzBoRYrQ/ph3MGhFitD+jYhNeG9CzP3I43XxlzqY/iRCjYhNeuz9boSU+U+6+P6nYhNcG9MQ/4jPl7p2rwz97aQezRoS4P/+BHE43X7k/0k90NKTgxj9Iwe0fyOHEP4tNeG1AT8U/lbt3rk72wD/WiBCjYhO+P4ZV6qUdzKo/BfiNxyKDuj9PtUJLfKa8P6DoaEjB7b8/MKxSL+1gtj891Qot8ZnCPzwWGdSMSc8/oSU+U+7eyT+Xtz4S4DfOPwI91Qot8ck/8dqAnmqF1j9K/sIq9dLePzvZQ8lfWOU/AAAAAAAA8D81Y9JPdDTsP4+GFNz+geQ/4HgsMqgZoz8=","dtype":"float64","order":"little","shape":[82]},"size":[48,50,31,8,2,47,76,19,47,44,84,88,153,80,191,171,224,244,181,165,282,170,330,303,338,180,254,280,239,281,339,311,406,289,549,421,324,370,155,227,136,129,104,72,97,128,85,61,82,125,145,145,141,82,194,219,296,278,174,180,323,295,301,240,213,96,188,203,226,159,263,441,365,426,366,634,867,1200,1798,1585,1153,69],"top":{"__ndarray__":"hI1H8wdbM0AAAAAAAMAyQJzACZzACTRAjC666KL3MEAf8Af8AX8wQOrJ+O1SlzBAbzBFPusGMUBuuUoa1VYyQBA++OCDJzFAHEyRz7rBMECp+/w+mE0yQMqImLbYmTFAzDvgSNEQMkBJkiRJktwwQJLFakKi/jJAW2uttda6MkC+WhuryZ8xQJx3JPLMeTJAAAAAAAAwMUCrqqqqqqozQLRuMEU+6zJA7Lqu67q+MkDMzMzMzGQyQDfvU1wyBDNAAAAAAADgMEB877333rswQO5fiJnHZjBA6aKLLrroLkD44uoHHRUwQJ7YiZ3YiS9AG8prKK9JLkDfKk3xS6IsQBA++OCDSy5AVVVVVVVVLkCttdZaa60tQE5vetOb3ixAPIIqAlDbLkA7MNcOzF0rQBQh4hz3MzBAguUcL+XDLUDtFn41JtIuQAgld4oWzixAE1O7StaGLkBZyEIWspAtQDiEQziEQzBABw4cOHCAL0Dbtm3btm0vQKuqqqqqqjBAMzMzMzPzMEDlF0t+seQvQKuqqqqqqi9AVgyU8EZTL0ByHMdxHMcrQAW4rbLflSdAFYpbobgVLUDotIFOG6gsQD436FSUnC1AibfCoYl8LEBNernUN8ssQKc3velN7y1ALb6HRoEqL0Ce+AWkxxctQHjhIHp8Fy5AK+Q+v8QhL0Ab9Z2N+s4wQEeVwwE4MjBACBrYTSclMEBKJGnGmnkvQDvUFATZji5AEGxFLb5YL0BptgfVykwvQEjhehSuxzBAzczMzMyMMEBRUFBQUKAwQIaZfcZ+ajBAv7VE7m9tMUBwPsEkoXwzQKuqqqqqaDRAv56YjUbgNEBVVVVVVVU1QI7jOI7jODZAWPuGtW9YN0A=","dtype":"float64","order":"little","shape":[82]},"width":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81]},"selected":{"id":"2458"},"selection_policy":{"id":"2459"}},"id":"2322","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"2466"},"ticker":{"id":"2382"}},"id":"2381","type":"LinearAxis"},{"attributes":{},"id":"2373","type":"LinearScale"},{"attributes":{},"id":"2386","type":"WheelZoomTool"},{"attributes":{},"id":"2335","type":"BasicTicker"},{"attributes":{"axis":{"id":"2381"},"dimension":1,"ticker":null,"visible":false},"id":"2384","type":"Grid"},{"attributes":{},"id":"2382","type":"BasicTicker"},{"attributes":{"data":{"bottom":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"left":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"top":[48,50,31,8,2,47,76,19,47,44,84,88,153,80,191,171,224,244,181,165,282,170,330,303,338,180,254,280,239,281,339,311,406,289,549,421,324,370,155,227,136,129,104,72,97,128,85,61,82,125,145,145,141,82,194,219,296,278,174,180,323,295,301,240,213,96,188,203,226,159,263,441,365,426,366,634,867,1200,1798,1585,1153,69]},"selected":{"id":"2450"},"selection_policy":{"id":"2451"}},"id":"2323","type":"ColumnDataSource"},{"attributes":{},"id":"2385","type":"PanTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"field":"shade"},"fill_color":{"value":"#005500"},"line_alpha":{"value":0.7},"line_color":{"value":"#005500"},"top":{"field":"top"},"width":{"field":"width"},"x":{"field":"x"}},"id":"2357","type":"VBar"},{"attributes":{},"id":"2390","type":"HelpTool"},{"attributes":{"overlay":{"id":"2391"}},"id":"2387","type":"BoxZoomTool"},{"attributes":{"data":{"bottom":{"__ndarray__":"AAAAAAAAIkAAAAAAAAAjQAAAAAAAACRAAAAAAAAAJUAAAAAAAAAmQAAAAAAAACdAAAAAAAAAKEAAAAAAAAApQAAAAAAAACpAAAAAAAAAK0AAAAAAAAAsQAAAAAAAAC1AAAAAAAAALkAAAAAAAAAvQAAAAAAAADBAAAAAAACAMEAAAAAAAAAxQAAAAAAAgDFAAAAAAAAAMkAAAAAAAIAyQAAAAAAAADNAAAAAAACAM0AAAAAAAAA0QAAAAAAAgDRAAAAAAAAANUAAAAAAAIA1QAAAAAAAADZAAAAAAACANkAAAAAAAAA3QAAAAAAAgDdA","dtype":"float64","order":"little","shape":[30]},"left":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"right":[156,311,604,782,928,999,1041,1069,1219,1146,1257,1119,1200,1002,1023,932,841,880,720,711,568,450,559,411,410,310,258,264,218,185],"top":{"__ndarray__":"AAAAAAAAI0AAAAAAAAAkQAAAAAAAACVAAAAAAAAAJkAAAAAAAAAnQAAAAAAAAChAAAAAAAAAKUAAAAAAAAAqQAAAAAAAACtAAAAAAAAALEAAAAAAAAAtQAAAAAAAAC5AAAAAAAAAL0AAAAAAAAAwQAAAAAAAgDBAAAAAAAAAMUAAAAAAAIAxQAAAAAAAADJAAAAAAACAMkAAAAAAAAAzQAAAAAAAgDNAAAAAAAAANEAAAAAAAIA0QAAAAAAAADVAAAAAAACANUAAAAAAAAA2QAAAAAAAgDZAAAAAAAAAN0AAAAAAAIA3QAAAAAAAADhA","dtype":"float64","order":"little","shape":[30]}},"selected":{"id":"2468"},"selection_policy":{"id":"2469"}},"id":"2324","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2421","type":"BoxAnnotation"},{"attributes":{},"id":"2330","type":"LinearScale"},{"attributes":{},"id":"2388","type":"SaveTool"},{"attributes":{},"id":"2389","type":"ResetTool"},{"attributes":{},"id":"2328","type":"DataRange1d"},{"attributes":{"background_fill_color":"#eeeeee","below":[{"id":"2334"}],"center":[{"id":"2337"},{"id":"2341"}],"left":[{"id":"2338"}],"min_border_top":0,"plot_height":500,"plot_width":800,"renderers":[{"id":"2360"},{"id":"2367"}],"title":{"id":"2454"},"toolbar":{"id":"2349"},"toolbar_location":null,"x_range":{"id":"2326"},"x_scale":{"id":"2330"},"y_range":{"id":"2328"},"y_scale":{"id":"2332"}},"id":"2325","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2326","type":"DataRange1d"},{"attributes":{"axis_label":"Year Built","formatter":{"id":"2439"},"ticker":{"id":"2335"}},"id":"2334","type":"LinearAxis"},{"attributes":{"axis_label":"m\\u00b2 Price [\\u20ac/m\\u00b2/Month]","formatter":{"id":"2442"},"ticker":{"id":"2339"}},"id":"2338","type":"LinearAxis"},{"attributes":{"axis":{"id":"2334"},"ticker":null},"id":"2337","type":"Grid"},{"attributes":{},"id":"2332","type":"LinearScale"},{"attributes":{},"id":"2347","type":"HelpTool"},{"attributes":{"text":""},"id":"2445","type":"Title"},{"attributes":{"axis":{"id":"2338"},"dimension":1,"ticker":null},"id":"2341","type":"Grid"},{"attributes":{},"id":"2339","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"invshade"},"line_color":{"field":"invshade"},"x":{"field":"x"},"y":{"field":"meds"}},"id":"2365","type":"Scatter"},{"attributes":{},"id":"2343","type":"WheelZoomTool"},{"attributes":{},"id":"2342","type":"PanTool"},{"attributes":{"source":{"id":"2324"}},"id":"2438","type":"CDSView"},{"attributes":{},"id":"2458","type":"Selection"},{"attributes":{"overlay":{"id":"2348"}},"id":"2344","type":"BoxZoomTool"},{"attributes":{},"id":"2459","type":"UnionRenderers"},{"attributes":{},"id":"2345","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2391","type":"BoxAnnotation"},{"attributes":{},"id":"2346","type":"ResetTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"white"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#005500"},"right":{"field":"right"},"top":{"field":"top"}},"id":"2431","type":"Quad"},{"attributes":{"source":{"id":"2323"}},"id":"2433","type":"CDSView"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0},"fill_color":{"value":"white"},"left":{"field":"left"},"line_alpha":{"value":0.9},"line_color":{"value":"#005500"},"right":{"field":"right"},"top":{"field":"top"}},"id":"2435","type":"Quad"},{"attributes":{"data_source":{"id":"2323"},"glyph":{"id":"2430"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2431"},"selection_glyph":null,"view":{"id":"2433"}},"id":"2432","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"white"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#005500"},"right":{"field":"right"},"top":{"field":"top"}},"id":"2436","type":"Quad"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2385"},{"id":"2386"},{"id":"2387"},{"id":"2388"},{"id":"2389"},{"id":"2390"}]},"id":"2392","type":"Toolbar"},{"attributes":{},"id":"2378","type":"BasicTicker"},{"attributes":{},"id":"2401","type":"DataRange1d"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#005500"},"line_alpha":{"value":0.1},"line_color":{"value":"#005500"},"top":{"field":"top"},"width":{"field":"width"},"x":{"field":"x"}},"id":"2358","type":"VBar"},{"attributes":{},"id":"2403","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"2348","type":"BoxAnnotation"},{"attributes":{},"id":"2405","type":"LinearScale"},{"attributes":{},"id":"2450","type":"Selection"},{"attributes":{"formatter":{"id":"2439"},"ticker":{"id":"2408"},"visible":false},"id":"2407","type":"LinearAxis"},{"attributes":{"text":""},"id":"2462","type":"Title"},{"attributes":{},"id":"2451","type":"UnionRenderers"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0},"fill_color":{"value":"white"},"left":{"field":"left"},"line_alpha":{"value":0.9},"line_color":{"value":"#005500"},"right":{"field":"right"},"top":{"field":"top"}},"id":"2430","type":"Quad"},{"attributes":{"formatter":{"id":"2446"},"ticker":{"id":"2412"},"visible":false},"id":"2411","type":"LinearAxis"},{"attributes":{},"id":"2420","type":"HelpTool"},{"attributes":{},"id":"2408","type":"BasicTicker"},{"attributes":{"axis":{"id":"2407"},"ticker":null,"visible":false},"id":"2410","type":"Grid"},{"attributes":{"axis":{"id":"2411"},"dimension":1,"ticker":null,"visible":false},"id":"2414","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2342"},{"id":"2343"},{"id":"2344"},{"id":"2345"},{"id":"2346"},{"id":"2347"},{"id":"2362"}]},"id":"2349","type":"Toolbar"},{"attributes":{},"id":"2412","type":"BasicTicker"},{"attributes":{"formatter":{"id":"2463"},"ticker":{"id":"2378"},"visible":false},"id":"2377","type":"LinearAxis"},{"attributes":{},"id":"2463","type":"BasicTickFormatter"},{"attributes":{"use_scientific":false},"id":"2442","type":"BasicTickFormatter"},{"attributes":{},"id":"2416","type":"WheelZoomTool"},{"attributes":{},"id":"2415","type":"PanTool"},{"attributes":{"data_source":{"id":"2322"},"glyph":{"id":"2365"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2366"},"selection_glyph":null,"view":{"id":"2368"}},"id":"2367","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"2421"}},"id":"2417","type":"BoxZoomTool"},{"attributes":{},"id":"2418","type":"SaveTool"},{"attributes":{},"id":"2419","type":"ResetTool"},{"attributes":{"text":""},"id":"2454","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"invshade"},"line_alpha":{"value":0.1},"line_color":{"field":"invshade"},"x":{"field":"x"},"y":{"field":"meds"}},"id":"2366","type":"Scatter"},{"attributes":{"below":[{"id":"2377"}],"center":[{"id":"2380"},{"id":"2384"}],"min_border_left":0,"outline_line_color":null,"plot_height":500,"plot_width":100,"renderers":[{"id":"2437"}],"title":{"id":"2462"},"toolbar":{"id":"2392"},"toolbar_location":null,"x_range":{"id":"2370"},"x_scale":{"id":"2373"},"y_range":{"id":"2328"},"y_scale":{"id":"2375"}},"id":"2369","subtype":"Figure","type":"Plot"},{"attributes":{"code":"\\n            var labels = [1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];\\n            return labels[tick];\\n        "},"id":"2439","type":"FuncTickFormatter"},{"attributes":{"above":[{"id":"2407"}],"center":[{"id":"2410"},{"id":"2414"}],"left":[{"id":"2411"}],"min_border_bottom":0,"outline_line_color":null,"plot_height":100,"plot_width":800,"renderers":[{"id":"2432"}],"title":{"id":"2445"},"toolbar":{"id":"2422"},"toolbar_location":null,"x_range":{"id":"2326"},"x_scale":{"id":"2403"},"y_range":{"id":"2401"},"y_scale":{"id":"2405"}},"id":"2399","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"2324"},"glyph":{"id":"2435"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2436"},"selection_glyph":null,"view":{"id":"2438"}},"id":"2437","type":"GlyphRenderer"},{"attributes":{},"id":"2370","type":"DataRange1d"},{"attributes":{},"id":"2375","type":"LinearScale"},{"attributes":{"source":{"id":"2322"}},"id":"2368","type":"CDSView"},{"attributes":{},"id":"2466","type":"BasicTickFormatter"},{"attributes":{},"id":"2468","type":"Selection"},{"attributes":{},"id":"2469","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2415"},{"id":"2416"},{"id":"2417"},{"id":"2418"},{"id":"2419"},{"id":"2420"}]},"id":"2422","type":"Toolbar"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.9},"fill_color":{"value":"#005500"},"line_alpha":{"value":0.7},"line_color":{"value":"#005500"},"top":{"field":"top"},"width":{"field":"width"},"x":{"field":"x"}},"id":"2359","type":"VBar"},{"attributes":{"data_source":{"id":"2322"},"glyph":{"id":"2357"},"hover_glyph":{"id":"2359"},"muted_glyph":null,"nonselection_glyph":{"id":"2358"},"selection_glyph":null,"view":{"id":"2361"}},"id":"2360","type":"GlyphRenderer"},{"attributes":{"callback":null,"renderers":[{"id":"2360"}],"tooltips":[["City","@name"],["50 m\\u00b2 Apt","@m50{0.00} \\u20ac"],["Year Built","@X"],["q.75","@hqs{0.00} \\u20ac"],["med","@meds{0.00} \\u20ac"],["q.25","@lqs{0.00)} \\u20ac"]]},"id":"2362","type":"HoverTool"},{"attributes":{"source":{"id":"2322"}},"id":"2361","type":"CDSView"}],"root_ids":["2471"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"ee782d46-66a5-4d0d-bb87-03bc60140bcd","root_ids":["2471"],"roots":{"2471":"30101c6c-d3dc-441c-a9dd-38edaf76182f"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();