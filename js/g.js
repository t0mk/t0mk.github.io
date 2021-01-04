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
    
      
      
    
      var element = document.getElementById("1992a689-58ef-4383-a6ca-de828bb7f86f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1992a689-58ef-4383-a6ca-de828bb7f86f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e4280704-54df-4870-9df3-3f92a69bb8b5":{"roots":{"references":[{"attributes":{"children":[[{"id":"1924"},0,0],[{"id":"1849"},1,0],[{"id":"1893"},1,1]]},"id":"1995","type":"GridBox"},{"attributes":{},"id":"1981","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1847"},"glyph":{"id":"1955"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1956"},"selection_glyph":null,"view":{"id":"1958"}},"id":"1957","type":"GlyphRenderer"},{"attributes":{},"id":"1972","type":"UnionRenderers"},{"attributes":{"text":""},"id":"1976","type":"Title"},{"attributes":{},"id":"1945","type":"HelpTool"},{"attributes":{},"id":"1943","type":"SaveTool"},{"attributes":{"source":{"id":"1848"}},"id":"1963","type":"CDSView"},{"attributes":{},"id":"1944","type":"ResetTool"},{"attributes":{"use_scientific":false},"id":"1964","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"1946"}},"id":"1942","type":"BoxZoomTool"},{"attributes":{},"id":"1990","type":"Selection"},{"attributes":{},"id":"1867","type":"WheelZoomTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"white"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#005500"},"right":{"field":"right"},"top":{"field":"top"}},"id":"1956","type":"Quad"},{"attributes":{},"id":"1980","type":"BasicTickFormatter"},{"attributes":{},"id":"1971","type":"BasicTickFormatter"},{"attributes":{},"id":"1913","type":"SaveTool"},{"attributes":{},"id":"1911","type":"WheelZoomTool"},{"attributes":{"source":{"id":"1847"}},"id":"1958","type":"CDSView"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0},"fill_color":{"value":"white"},"left":{"field":"left"},"line_alpha":{"value":0.9},"line_color":{"value":"#005500"},"right":{"field":"right"},"top":{"field":"top"}},"id":"1960","type":"Quad"},{"attributes":{"overlay":{"id":"1872"}},"id":"1868","type":"BoxZoomTool"},{"attributes":{},"id":"1914","type":"ResetTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#005500"},"line_alpha":{"value":0.1},"line_color":{"value":"#005500"},"top":{"field":"top"},"width":{"field":"width"},"x":{"field":"x"}},"id":"1882","type":"VBar"},{"attributes":{},"id":"1871","type":"HelpTool"},{"attributes":{"overlay":{"id":"1916"}},"id":"1912","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1866"},{"id":"1867"},{"id":"1868"},{"id":"1869"},{"id":"1870"},{"id":"1871"},{"id":"1886"}]},"id":"1873","type":"Toolbar"},{"attributes":{"axis":{"id":"1862"},"dimension":1,"ticker":null},"id":"1865","type":"Grid"},{"attributes":{},"id":"1969","type":"BasicTickFormatter"},{"attributes":{},"id":"1940","type":"PanTool"},{"attributes":{"data_source":{"id":"1848"},"glyph":{"id":"1960"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1961"},"selection_glyph":null,"view":{"id":"1963"}},"id":"1962","type":"GlyphRenderer"},{"attributes":{},"id":"1941","type":"WheelZoomTool"},{"attributes":{},"id":"1973","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1946","type":"BoxAnnotation"},{"attributes":{},"id":"1915","type":"HelpTool"},{"attributes":{},"id":"1869","type":"SaveTool"},{"attributes":{},"id":"1989","type":"UnionRenderers"},{"attributes":{"text":""},"id":"1985","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1940"},{"id":"1941"},{"id":"1942"},{"id":"1943"},{"id":"1944"},{"id":"1945"}]},"id":"1947","type":"Toolbar"},{"attributes":{},"id":"1982","type":"Selection"},{"attributes":{},"id":"1866","type":"PanTool"},{"attributes":{},"id":"1993","type":"BasicTickFormatter"},{"attributes":{"text":""},"id":"1966","type":"Title"},{"attributes":{},"id":"1870","type":"ResetTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"white"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#005500"},"right":{"field":"right"},"top":{"field":"top"}},"id":"1961","type":"Quad"},{"attributes":{},"id":"1928","type":"LinearScale"},{"attributes":{},"id":"1910","type":"PanTool"},{"attributes":{"axis":{"id":"1936"},"dimension":1,"ticker":null,"visible":false},"id":"1939","type":"Grid"},{"attributes":{"axis_label":"Apartment Price [\\u20ac/Month]","formatter":{"id":"1964"},"ticker":{"id":"1863"}},"id":"1862","type":"LinearAxis"},{"attributes":{"source":{"id":"1846"}},"id":"1892","type":"CDSView"},{"attributes":{"formatter":{"id":"1969"},"ticker":{"id":"1933"},"visible":false},"id":"1932","type":"LinearAxis"},{"attributes":{"below":[{"id":"1902"}],"center":[{"id":"1905"},{"id":"1909"}],"min_border_left":0,"outline_line_color":null,"plot_height":500,"plot_width":100,"renderers":[{"id":"1962"}],"title":{"id":"1985"},"toolbar":{"id":"1917"},"toolbar_location":null,"x_range":{"id":"1894"},"x_scale":{"id":"1898"},"y_range":{"id":"1896"},"y_scale":{"id":"1900"}},"id":"1893","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"1988"},"ticker":{"id":"1903"},"visible":false},"id":"1902","type":"LinearAxis"},{"attributes":{},"id":"1850","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1910"},{"id":"1911"},{"id":"1912"},{"id":"1913"},{"id":"1914"},{"id":"1915"}]},"id":"1917","type":"Toolbar"},{"attributes":{},"id":"1988","type":"BasicTickFormatter"},{"attributes":{},"id":"1856","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"invshade"},"line_alpha":{"value":0.1},"line_color":{"field":"invshade"},"x":{"field":"x"},"y":{"field":"meds"}},"id":"1890","type":"Scatter"},{"attributes":{"axis":{"id":"1858"},"ticker":null},"id":"1861","type":"Grid"},{"attributes":{},"id":"1903","type":"BasicTicker"},{"attributes":{"axis":{"id":"1906"},"dimension":1,"ticker":null,"visible":false},"id":"1909","type":"Grid"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0},"fill_color":{"value":"white"},"left":{"field":"left"},"line_alpha":{"value":0.9},"line_color":{"value":"#005500"},"right":{"field":"right"},"top":{"field":"top"}},"id":"1955","type":"Quad"},{"attributes":{"data_source":{"id":"1846"},"glyph":{"id":"1889"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1890"},"selection_glyph":null,"view":{"id":"1892"}},"id":"1891","type":"GlyphRenderer"},{"attributes":{},"id":"1900","type":"LinearScale"},{"attributes":{"data":{"bottom":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"left":[15.0,16.9,18.8,20.7,22.6,24.5,26.4,28.299999999999997,30.2,32.099999999999994,34.0,35.9,37.8,39.7,41.599999999999994,43.5,45.4,47.3,49.199999999999996,51.1,53.0,54.9,56.8,58.699999999999996,60.599999999999994,62.5,64.4,66.3,68.19999999999999,70.1,72.0,73.9,75.8,77.69999999999999,79.6,81.5,83.39999999999999,85.3,87.2,89.1,91.0,92.89999999999999,94.8,96.7,98.6,100.5,102.39999999999999,104.3,106.19999999999999,108.1],"right":[16.9,18.8,20.7,22.6,24.5,26.4,28.299999999999997,30.2,32.099999999999994,34.0,35.9,37.8,39.7,41.599999999999994,43.5,45.4,47.3,49.199999999999996,51.1,53.0,54.9,56.8,58.699999999999996,60.599999999999994,62.5,64.4,66.3,68.19999999999999,70.1,72.0,73.9,75.8,77.69999999999999,79.6,81.5,83.39999999999999,85.3,87.2,89.1,91.0,92.89999999999999,94.8,96.7,98.6,100.5,102.39999999999999,104.3,106.19999999999999,108.1,110.0],"top":[9,16,119,365,433,780,985,1230,1210,804,1027,950,1006,828,720,1068,900,1077,965,659,966,1015,1136,807,548,404,376,278,334,232,380,615,407,308,118,118,93,80,115,85,101,48,55,25,11,7,5,8,10,6]},"selected":{"id":"1973"},"selection_policy":{"id":"1972"}},"id":"1847","type":"ColumnDataSource"},{"attributes":{},"id":"1898","type":"LinearScale"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"field":"shade"},"fill_color":{"value":"#005500"},"line_alpha":{"value":0.7},"line_color":{"value":"#005500"},"top":{"field":"top"},"width":{"field":"width"},"x":{"field":"x"}},"id":"1881","type":"VBar"},{"attributes":{"above":[{"id":"1932"}],"center":[{"id":"1935"},{"id":"1939"}],"left":[{"id":"1936"}],"min_border_bottom":0,"outline_line_color":null,"plot_height":100,"renderers":[{"id":"1957"}],"title":{"id":"1966"},"toolbar":{"id":"1947"},"toolbar_location":null,"x_range":{"id":"1850"},"x_scale":{"id":"1928"},"y_range":{"id":"1926"},"y_scale":{"id":"1930"}},"id":"1924","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1863","type":"BasicTicker"},{"attributes":{},"id":"1854","type":"LinearScale"},{"attributes":{"end":1500,"start":250},"id":"1896","type":"Range1d"},{"attributes":{"background_fill_color":"#eeeeee","below":[{"id":"1858"}],"center":[{"id":"1861"},{"id":"1865"}],"left":[{"id":"1862"}],"min_border_top":0,"plot_height":500,"renderers":[{"id":"1884"},{"id":"1891"}],"title":{"id":"1976"},"toolbar":{"id":"1873"},"toolbar_location":null,"x_range":{"id":"1850"},"x_scale":{"id":"1854"},"y_range":{"id":"1852"},"y_scale":{"id":"1856"}},"id":"1849","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Apartment Area m\\u00b2","formatter":{"id":"1980"},"ticker":{"id":"1859"}},"id":"1858","type":"LinearAxis"},{"attributes":{},"id":"1933","type":"BasicTicker"},{"attributes":{"data":{"bottom":{"__ndarray__":"MzMzMzNLcUDTBjptoNdzQHTaQKcNZHZAFK5H4XrweEC0gU4b6Hx7QFVVVVVVCX5AehSuR+FKgEBLfrHkF5GBQBvotIFO14JA61G4HoUdhEC8u7u7u2OFQIwlv1jyqYZAXI/C9Sjwh0As+cWSXzaJQPxiyS+WfIpAzMzMzMzCi0CcNtBpAwmNQGyg0wY6T45APArXo3CVj0AHOm2g022QQO/u7u7uEJFA16NwPQq0kUC/WPKLJVeSQKcNdNpA+pJAj8L1KFydk0B3d3d3d0CUQF8s+cWS45RASOF6FK6GlUAwlvxiySmWQBhLfrHkzJZA","dtype":"float64","order":"little","shape":[30]},"left":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"right":[18,32,62,148,536,1292,2131,2778,2331,2744,2893,2096,1928,1191,989,738,493,499,273,150,141,88,100,57,33,33,23,24,7,12],"top":{"__ndarray__":"0wY6baDXc0B02kCnDWR2QBSuR+F68HhAtIFOG+h8e0BVVVVVVQl+QHoUrkfhSoBAS36x5BeRgUAb6LSBTteCQOtRuB6FHYRAvLu7u7tjhUCMJb9Y8qmGQFyPwvUo8IdALPnFkl82iUD8YskvlnyKQMzMzMzMwotAnDbQaQMJjUBsoNMGOk+OQDwK16NwlY9ABzptoNNtkEDv7u7u7hCRQNejcD0KtJFAv1jyiyVXkkCnDXTaQPqSQI/C9ShcnZNAd3d3d3dAlEBfLPnFkuOUQEjhehSuhpVAMJb8YskplkAYS36x5MyWQAAAAAAAcJdA","dtype":"float64","order":"little","shape":[30]}},"selected":{"id":"1990"},"selection_policy":{"id":"1989"}},"id":"1848","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"1902"},"ticker":null,"visible":false},"id":"1905","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1916","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"1846"},"glyph":{"id":"1881"},"hover_glyph":{"id":"1883"},"muted_glyph":null,"nonselection_glyph":{"id":"1882"},"selection_glyph":null,"view":{"id":"1885"}},"id":"1884","type":"GlyphRenderer"},{"attributes":{},"id":"1937","type":"BasicTicker"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.9},"fill_color":{"value":"#005500"},"line_alpha":{"value":0.7},"line_color":{"value":"#005500"},"top":{"field":"top"},"width":{"field":"width"},"x":{"field":"x"}},"id":"1883","type":"VBar"},{"attributes":{"formatter":{"id":"1993"},"ticker":{"id":"1907"}},"id":"1906","type":"LinearAxis"},{"attributes":{"data":{"bottom":{"__ndarray__":"AAAAAACweEAAAAAAABh1QAAAAAAAsH1AMJb8YsmpfUAAAAAAAJB/QAAAAAAAQIBAAAAAAACQgEAAAAAAAJCAQAAAAAAAkIBAAAAAAAAIgUAAAAAAALiAQAAAAAAAcIJAAAAAAACYgkAAAAAAAFiDQAAAAAAAtoNA4XoUrkc3hEAAAAAAAKCEQAAAAAAAKIRAAAAAAABQhEDiehSuRw+FQAAAAAAAeIVAAAAAAADwhEAAAAAAAFCEQKRwPQrXcIVAAAAAAACQhUAL16NwvbSGQGZmZmbmrYdAAAAAAAA4iEAAAAAAAKCJQAAAAAAA1IhAAAAAAABgiEA+CtejcIKIQNejcD0KiohAAAAAAAAoiUDC9Shcj5GKQML1KFyPz4pAZmZmZmYEjEDsUbgeBVWMQAAAAAAARIxA16NwPQofjEAAAAAAAFiNQAAAAAAAlo1AXI/C9SgnjkAUrkfheg6NQNejcD0K5Y1ACtejcD3nkUAAAAAAAC6PQAAAAAAAXJJAAAAAAEDLkkAAAAAAANqRQIwlv1hy3pBA","dtype":"float64","order":"little","shape":[51]},"hqs":{"__ndarray__":"AAAAAADQe0AAAAAAACR9QAAAAAAAkIBAAAAAAAC4gEAAAAAAAICBQAAAAAAAIIJAAAAAAABwgkAAAAAAABCDQAAAAAAAEINAAAAAAACwg0AAAAAAACiEQAAAAAAAHoVAAAAAAAC4hUAAAAAAAICGQAAAAAAA0IZAAAAAAABah0AAAAAAABCIQAAAAAAAcIdAAAAAAABgiEAAAAAAANiIQAAAAAAA2IhAAAAAAAD4iEAAAAAAAPCIQAAAAAAAJIpAAAAAAABqikAAAAAAACCMQAAAAAAA+IxAAAAAAAAQjUAAAAAAANyOQAAAAAAAAI5AAAAAAABwjUC4HoXrUcuMQHoUrkfhe45AAAAAAACgjkAAAAAAADyPQOF6FK7HH49AAAAAAAAokUD1KFyPwsqRQAAAAAAAdpFAMzMzMzP1kEDXo3A9CoSRQAAAAAAA4I9AAAAAAADgkkAAAAAAAFiTQFK4HoVrQJFAAAAAAAAolEAAAAAAABSUQAAAAAAARpVAAAAAAABylUAAAAAAABqTQAAAAAAAMJFA","dtype":"float64","order":"little","shape":[51]},"invshade":["#000000","#000000","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],"lqs":{"__ndarray__":"AAAAAACweEAAAAAAABh1QAAAAAAAsH1AAAAAAADwfkAAAAAAAJB/QAAAAAAAQIBAAAAAAACQgEAAAAAAAJCAQAAAAAAAkIBAAAAAAAAIgUAAAAAAALiAQAAAAAAAcIJAAAAAAACYgkAAAAAAAFiDQAAAAAAAtoNA4XoUrkc3hEAAAAAAAKCEQAAAAAAAKIRAAAAAAABQhEDiehSuRw+FQAAAAAAAeIVAAAAAAADwhEAAAAAAAFCEQKRwPQrXcIVAAAAAAACQhUAL16NwvbSGQGZmZmbmrYdAAAAAAAA4iEAAAAAAAKCJQAAAAAAA1IhAAAAAAABgiEA+CtejcIKIQNejcD0KiohAAAAAAAAoiUDC9Shcj5GKQML1KFyPz4pAZmZmZmYEjEDsUbgeBVWMQAAAAAAARIxA16NwPQofjEAAAAAAAFiNQAAAAAAAlo1AXI/C9SgnjkAUrkfheg6NQNejcD0K5Y1ACtejcD3nkUAAAAAAAC6PQAAAAAAAXJJAAAAAAEDLkkAAAAAAANqRQAAAAAAAMJFA","dtype":"float64","order":"little","shape":[51]},"meds":{"__ndarray__":"AAAAAADQeEAAAAAAABB4QAAAAAAAQH9AAAAAAABAgEAAAAAAAJCAQAAAAAAAMIFAAAAAAACAgUAAAAAAANCBQAAAAAAA0IFAAAAAAABwgkAAAAAAAJiCQAAAAAAAsINAAAAAAABQhEAAAAAAAPCEQAAAAAAAaIVAAAAAAACQhUAAAAAAABSGQAAAAAAAuIVAAAAAAAAwhkAAAAAAANCGQAAAAAAAIIdAAAAAAADQhkAAAAAAAKiGQI/C9ShcbYdAAAAAAAC8h0A+CtejcD2JQOJ6FK5HqIlAMzMzMzOQikAAAAAAAPiLQAAAAAAAWItAAAAAAACQikAAAAAAAECKQAAAAAAA4IpAAAAAAADQi0BI4XoUrgGNQAAAAAAAvYxA4XoUrkcXj0BSuB6FazuQQAAAAAAAGI9A4XoUrke3jkAAAAAAADCPQJqZmZmZto5AAAAAAABokEAAAAAAAHiRQAAAAAAAoI5A9ihcj8LrkkAAAAAAAMCSQHA9CtcjaZNArkfhehTUk0AAAAAAAKySQAAAAAAAMJFA","dtype":"float64","order":"little","shape":[51]},"name":["Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere"],"shade":{"__ndarray__":"fe6WiTlZdz997paJOVmHP7U9cq0QZLg/0N0yMSfr0j8n64IRaXbWP8vEnKwLRuQ/yrpgRJqd6T8AAAAAAADwP2RYEm6Ueu8/U/S5Wybm5D/4zdP2yLXqP3nVAAUetOg/YUSanbEp6j/bI9cKQYblP/jN0/bIteI/K//64UvH6z9zsi4YkWbnP/3wpeNVA+w/LhNzsi4Y6T8p9b552h7hPyn1vnnaHuk/NDZFn7tl6j/WBSPS7IztP0SanbEp+uQ/qPKvH7503D9JuFHqffPUP2JJuFHqfdM/bIo+d8vEzD8GI9LsjE3RPwUetDhU+cc/OlkXjEiz0z8KPGhxqPLfPysEGZaEG9U/FHjQ4lDlzz/dLRNzsi64P90tE3OyLrg/xqHKv374sj/O0/bItUKwP1X+9cOXjrc/BiPS7IxNsT+FIMOScKO0P56xKfrcLaM/bY9cKwQZpj+esSn63C2TP3zpeNUABX4/fvO0PXKtcD/98KXjVQNkP/3wpeNVA3Q//euHLx2vej/964cvHa9aPwAAAAAAAAAA","dtype":"float64","order":"little","shape":[51]},"size":[9,16,119,365,433,780,985,1230,1210,804,1027,950,1006,828,720,1068,900,1077,965,659,966,1015,1136,807,548,404,376,278,334,232,380,615,407,308,118,118,93,80,115,85,101,48,55,25,11,7,5,8,10,4,2],"top":{"__ndarray__":"AAAAAADQe0AAAAAAACR9QAAAAAAAkIBA6LSBThtbgUAAAAAAAICBQAAAAAAAIIJAAAAAAABwgkAAAAAAABCDQAAAAAAAEINAAAAAAACwg0AAAAAAACiEQAAAAAAAHoVAAAAAAAC4hUAAAAAAAICGQAAAAAAA0IZAAAAAAABah0AAAAAAABCIQAAAAAAAcIdAAAAAAABgiEAAAAAAANiIQAAAAAAA2IhAAAAAAAD4iEAAAAAAAPCIQAAAAAAAJIpAAAAAAABqikAAAAAAACCMQAAAAAAA+IxAAAAAAAAQjUAAAAAAANyOQAAAAAAAAI5AAAAAAABwjUC4HoXrUcuMQHoUrkfhe45AAAAAAACgjkAAAAAAADyPQOF6FK7HH49AAAAAAAAokUD1KFyPwsqRQAAAAAAAdpFAMzMzMzP1kEDXo3A9CoSRQAAAAAAA4I9AAAAAAADgkkAAAAAAAFiTQFK4HoVrQJFAAAAAAAAolEAAAAAAABSUQAAAAAAARpVAAAAAAABylUAAAAAAABqTQHTaQKeNgZFA","dtype":"float64","order":"little","shape":[51]},"width":[1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157],"x":{"__ndarray__":"AAAAAAAALkBmZmZmZuYwQM3MzMzMzDJAMzMzMzOzNECamZmZmZk2QAAAAAAAgDhAZmZmZmZmOkDMzMzMzEw8QDMzMzMzMz5AzMzMzMwMQEAAAAAAAABBQDMzMzMz80FAZmZmZmbmQkCamZmZmdlDQMzMzMzMzERAAAAAAADARUAzMzMzM7NGQGZmZmZmpkdAmZmZmZmZSEDNzMzMzIxJQAAAAAAAgEpAMzMzMzNzS0BmZmZmZmZMQJmZmZmZWU1AzMzMzMxMTkAAAAAAAEBPQJqZmZmZGVBAMzMzMzOTUEDMzMzMzAxRQGZmZmZmhlFAAAAAAAAAUkCamZmZmXlSQDMzMzMz81JAzMzMzMxsU0BmZmZmZuZTQAAAAAAAYFRAmZmZmZnZVEAzMzMzM1NVQM3MzMzMzFVAZmZmZmZGVkAAAAAAAMBWQJmZmZmZOVdAMzMzMzOzV0DNzMzMzCxYQGZmZmZmplhAAAAAAAAgWUCZmZmZmZlZQDMzMzMzE1pAzMzMzMyMWkBmZmZmZgZbQAAAAAAAgFtA","dtype":"float64","order":"little","shape":[51]}},"selected":{"id":"1982"},"selection_policy":{"id":"1981"}},"id":"1846","type":"ColumnDataSource"},{"attributes":{},"id":"1859","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"invshade"},"line_color":{"field":"invshade"},"x":{"field":"x"},"y":{"field":"meds"}},"id":"1889","type":"Scatter"},{"attributes":{},"id":"1852","type":"DataRange1d"},{"attributes":{"axis":{"id":"1932"},"ticker":null,"visible":false},"id":"1935","type":"Grid"},{"attributes":{"callback":null,"renderers":[{"id":"1884"}],"tooltips":[["City","@name"],["Apt Size","@x{00.0} m\\u00b2"],["Bin Size","@size{0,0}"],["q.75","@hqs{0,0} \\u20ac"],["med","@meds{0,0} \\u20ac"],["q.25","@lqs{0,0} \\u20ac"]]},"id":"1886","type":"HoverTool"},{"attributes":{},"id":"1926","type":"DataRange1d"},{"attributes":{},"id":"1907","type":"BasicTicker"},{"attributes":{},"id":"1894","type":"DataRange1d"},{"attributes":{"formatter":{"id":"1971"},"ticker":{"id":"1937"},"visible":false},"id":"1936","type":"LinearAxis"},{"attributes":{"source":{"id":"1846"}},"id":"1885","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1872","type":"BoxAnnotation"},{"attributes":{},"id":"1930","type":"LinearScale"}],"root_ids":["1995"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"e4280704-54df-4870-9df3-3f92a69bb8b5","root_ids":["1995"],"roots":{"1995":"1992a689-58ef-4383-a6ca-de828bb7f86f"}}];
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