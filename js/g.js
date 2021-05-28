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
    
      
      
    
      var element = document.getElementById("596b9393-8e96-421f-bfa3-beb914cf3a4a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '596b9393-8e96-421f-bfa3-beb914cf3a4a' but no matching script tag was found.")
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
                    
                  var docs_json = '{"aa723d78-93a8-4727-a86c-9f2c404da916":{"roots":{"references":[{"attributes":{"children":[[{"id":"1460"},0,0],[{"id":"1386"},1,0],[{"id":"1430"},1,1]]},"id":"1531","type":"GridBox"},{"attributes":{"axis_label":"Apartment Area m\\u00b2","formatter":{"id":"1515"},"ticker":{"id":"1396"}},"id":"1395","type":"LinearAxis"},{"attributes":{},"id":"1480","type":"ResetTool"},{"attributes":{"axis":{"id":"1395"},"ticker":null},"id":"1398","type":"Grid"},{"attributes":{},"id":"1523","type":"BasicTickFormatter"},{"attributes":{},"id":"1387","type":"DataRange1d"},{"attributes":{"above":[{"id":"1468"}],"center":[{"id":"1471"},{"id":"1475"}],"left":[{"id":"1472"}],"min_border_bottom":0,"outline_line_color":null,"plot_height":100,"renderers":[{"id":"1493"}],"title":{"id":"1503"},"toolbar":{"id":"1483"},"toolbar_location":null,"x_range":{"id":"1387"},"x_scale":{"id":"1464"},"y_range":{"id":"1462"},"y_scale":{"id":"1466"}},"id":"1460","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1389","type":"DataRange1d"},{"attributes":{},"id":"1477","type":"WheelZoomTool"},{"attributes":{"axis_label":"Apartment Price [\\u20ac/Month]","formatter":{"id":"1500"},"ticker":{"id":"1400"}},"id":"1399","type":"LinearAxis"},{"attributes":{},"id":"1396","type":"BasicTicker"},{"attributes":{},"id":"1393","type":"LinearScale"},{"attributes":{},"id":"1391","type":"LinearScale"},{"attributes":{},"id":"1408","type":"HelpTool"},{"attributes":{},"id":"1479","type":"SaveTool"},{"attributes":{"axis":{"id":"1472"},"dimension":1,"ticker":null,"visible":false},"id":"1475","type":"Grid"},{"attributes":{"axis":{"id":"1399"},"dimension":1,"ticker":null},"id":"1402","type":"Grid"},{"attributes":{},"id":"1400","type":"BasicTicker"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#005500"},"line_alpha":{"value":0.1},"line_color":{"value":"#005500"},"top":{"field":"top"},"width":{"field":"width"},"x":{"field":"x"}},"id":"1419","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1476"},{"id":"1477"},{"id":"1478"},{"id":"1479"},{"id":"1480"},{"id":"1481"}]},"id":"1483","type":"Toolbar"},{"attributes":{},"id":"1404","type":"WheelZoomTool"},{"attributes":{},"id":"1403","type":"PanTool"},{"attributes":{"overlay":{"id":"1409"}},"id":"1405","type":"BoxZoomTool"},{"attributes":{},"id":"1406","type":"SaveTool"},{"attributes":{},"id":"1407","type":"ResetTool"},{"attributes":{"axis":{"id":"1438"},"ticker":null,"visible":false},"id":"1441","type":"Grid"},{"attributes":{},"id":"1431","type":"DataRange1d"},{"attributes":{"source":{"id":"1383"}},"id":"1429","type":"CDSView"},{"attributes":{},"id":"1439","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1383"},"glyph":{"id":"1426"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1427"},"selection_glyph":null,"view":{"id":"1429"}},"id":"1428","type":"GlyphRenderer"},{"attributes":{},"id":"1436","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"invshade"},"line_alpha":{"value":0.1},"line_color":{"field":"invshade"},"x":{"field":"x"},"y":{"field":"meds"}},"id":"1427","type":"Scatter"},{"attributes":{"fill_color":{"field":"invshade"},"line_color":{"field":"invshade"},"x":{"field":"x"},"y":{"field":"meds"}},"id":"1426","type":"Scatter"},{"attributes":{},"id":"1481","type":"HelpTool"},{"attributes":{},"id":"1506","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1523"},"ticker":{"id":"1439"},"visible":false},"id":"1438","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1409","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"1438"}],"center":[{"id":"1441"},{"id":"1445"}],"min_border_left":0,"outline_line_color":null,"plot_height":500,"plot_width":100,"renderers":[{"id":"1498"}],"title":{"id":"1522"},"toolbar":{"id":"1453"},"toolbar_location":null,"x_range":{"id":"1431"},"x_scale":{"id":"1434"},"y_range":{"id":"1389"},"y_scale":{"id":"1436"}},"id":"1430","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"1442"},"dimension":1,"ticker":null,"visible":false},"id":"1445","type":"Grid"},{"attributes":{},"id":"1476","type":"PanTool"},{"attributes":{"formatter":{"id":"1504"},"ticker":{"id":"1473"},"visible":false},"id":"1472","type":"LinearAxis"},{"attributes":{},"id":"1466","type":"LinearScale"},{"attributes":{},"id":"1464","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1403"},{"id":"1404"},{"id":"1405"},{"id":"1406"},{"id":"1407"},{"id":"1408"},{"id":"1423"}]},"id":"1410","type":"Toolbar"},{"attributes":{},"id":"1504","type":"BasicTickFormatter"},{"attributes":{},"id":"1462","type":"DataRange1d"},{"attributes":{},"id":"1446","type":"PanTool"},{"attributes":{"data_source":{"id":"1383"},"glyph":{"id":"1418"},"hover_glyph":{"id":"1420"},"muted_glyph":null,"nonselection_glyph":{"id":"1419"},"selection_glyph":null,"view":{"id":"1422"}},"id":"1421","type":"GlyphRenderer"},{"attributes":{"text":""},"id":"1513","type":"Title"},{"attributes":{"formatter":{"id":"1528"},"ticker":{"id":"1443"}},"id":"1442","type":"LinearAxis"},{"attributes":{},"id":"1473","type":"BasicTicker"},{"attributes":{"callback":null,"renderers":[{"id":"1421"}],"tooltips":[["City","@name"],["Apt Size","@x{00.0} m\\u00b2"],["Bin Size","@size{0,0}"],["q.75","@hqs{0,0} \\u20ac"],["med","@meds{0,0} \\u20ac"],["q.25","@lqs{0,0} \\u20ac"]]},"id":"1423","type":"HoverTool"},{"attributes":{},"id":"1443","type":"BasicTicker"},{"attributes":{},"id":"1447","type":"WheelZoomTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.9},"fill_color":{"value":"#005500"},"line_alpha":{"value":0.7},"line_color":{"value":"#005500"},"top":{"field":"top"},"width":{"field":"width"},"x":{"field":"x"}},"id":"1420","type":"VBar"},{"attributes":{},"id":"1450","type":"ResetTool"},{"attributes":{"source":{"id":"1383"}},"id":"1422","type":"CDSView"},{"attributes":{"formatter":{"id":"1506"},"ticker":{"id":"1469"},"visible":false},"id":"1468","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1482","type":"BoxAnnotation"},{"attributes":{},"id":"1449","type":"SaveTool"},{"attributes":{"axis":{"id":"1468"},"ticker":null,"visible":false},"id":"1471","type":"Grid"},{"attributes":{},"id":"1469","type":"BasicTicker"},{"attributes":{"overlay":{"id":"1482"}},"id":"1478","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"1384"},"glyph":{"id":"1491"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1492"},"selection_glyph":null,"view":{"id":"1494"}},"id":"1493","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"white"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#005500"},"right":{"field":"right"},"top":{"field":"top"}},"id":"1492","type":"Quad"},{"attributes":{},"id":"1434","type":"LinearScale"},{"attributes":{"data":{"bottom":{"__ndarray__":"AAAAAACweEAAAAAAABh1QAAAAAAAsH1AMJb8YsmpfUAAAAAAAJB/QAAAAAAAQIBAAAAAAACQgEAAAAAAAJCAQAAAAAAAkIBAAAAAAAAIgUAAAAAAALiAQAAAAAAAcIJAAAAAAACYgkAAAAAAAFiDQAAAAAAAtoNA4XoUrkc3hEAAAAAAAKCEQAAAAAAAKIRAAAAAAABQhEDiehSuRw+FQAAAAAAAeIVAAAAAAADwhEAAAAAAAFCEQKRwPQrXcIVAAAAAAACQhUAL16NwvbSGQGZmZmbmrYdAAAAAAAA4iEAAAAAAAKCJQAAAAAAA1IhAAAAAAABgiEA+CtejcIKIQNejcD0KiohAAAAAAAAoiUDC9Shcj5GKQML1KFyPz4pAZmZmZmYEjEDsUbgeBVWMQAAAAAAARIxA16NwPQofjEAAAAAAAFiNQAAAAAAAlo1AXI/C9SgnjkAUrkfheg6NQNejcD0K5Y1ACtejcD3nkUAAAAAAAC6PQAAAAAAAXJJAAAAAAEDLkkAAAAAAANqRQIwlv1hy3pBA","dtype":"float64","order":"little","shape":[51]},"hqs":{"__ndarray__":"AAAAAADQe0AAAAAAACR9QAAAAAAAkIBAAAAAAAC4gEAAAAAAAICBQAAAAAAAIIJAAAAAAABwgkAAAAAAABCDQAAAAAAAEINAAAAAAACwg0AAAAAAACiEQAAAAAAAHoVAAAAAAAC4hUAAAAAAAICGQAAAAAAA0IZAAAAAAABah0AAAAAAABCIQAAAAAAAcIdAAAAAAABgiEAAAAAAANiIQAAAAAAA2IhAAAAAAAD4iEAAAAAAAPCIQAAAAAAAJIpAAAAAAABqikAAAAAAACCMQAAAAAAA+IxAAAAAAAAQjUAAAAAAANyOQAAAAAAAAI5AAAAAAABwjUC4HoXrUcuMQHoUrkfhe45AAAAAAACgjkAAAAAAADyPQOF6FK7HH49AAAAAAAAokUD1KFyPwsqRQAAAAAAAdpFAMzMzMzP1kEDXo3A9CoSRQAAAAAAA4I9AAAAAAADgkkAAAAAAAFiTQFK4HoVrQJFAAAAAAAAolEAAAAAAABSUQAAAAAAARpVAAAAAAABylUAAAAAAABqTQAAAAAAAMJFA","dtype":"float64","order":"little","shape":[51]},"invshade":["#000000","#000000","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],"lqs":{"__ndarray__":"AAAAAACweEAAAAAAABh1QAAAAAAAsH1AAAAAAADwfkAAAAAAAJB/QAAAAAAAQIBAAAAAAACQgEAAAAAAAJCAQAAAAAAAkIBAAAAAAAAIgUAAAAAAALiAQAAAAAAAcIJAAAAAAACYgkAAAAAAAFiDQAAAAAAAtoNA4XoUrkc3hEAAAAAAAKCEQAAAAAAAKIRAAAAAAABQhEDiehSuRw+FQAAAAAAAeIVAAAAAAADwhEAAAAAAAFCEQKRwPQrXcIVAAAAAAACQhUAL16NwvbSGQGZmZmbmrYdAAAAAAAA4iEAAAAAAAKCJQAAAAAAA1IhAAAAAAABgiEA+CtejcIKIQNejcD0KiohAAAAAAAAoiUDC9Shcj5GKQML1KFyPz4pAZmZmZmYEjEDsUbgeBVWMQAAAAAAARIxA16NwPQofjEAAAAAAAFiNQAAAAAAAlo1AXI/C9SgnjkAUrkfheg6NQNejcD0K5Y1ACtejcD3nkUAAAAAAAC6PQAAAAAAAXJJAAAAAAEDLkkAAAAAAANqRQAAAAAAAMJFA","dtype":"float64","order":"little","shape":[51]},"meds":{"__ndarray__":"AAAAAADQeEAAAAAAABB4QAAAAAAAQH9AAAAAAABAgEAAAAAAAJCAQAAAAAAAMIFAAAAAAACAgUAAAAAAANCBQAAAAAAA0IFAAAAAAABwgkAAAAAAAJiCQAAAAAAAsINAAAAAAABQhEAAAAAAAPCEQAAAAAAAaIVAAAAAAACQhUAAAAAAABSGQAAAAAAAuIVAAAAAAAAwhkAAAAAAANCGQAAAAAAAIIdAAAAAAADQhkAAAAAAAKiGQI/C9ShcbYdAAAAAAAC8h0A+CtejcD2JQOJ6FK5HqIlAMzMzMzOQikAAAAAAAPiLQAAAAAAAWItAAAAAAACQikAAAAAAAECKQAAAAAAA4IpAAAAAAADQi0BI4XoUrgGNQAAAAAAAvYxA4XoUrkcXj0BSuB6FazuQQAAAAAAAGI9A4XoUrke3jkAAAAAAADCPQJqZmZmZto5AAAAAAABokEAAAAAAAHiRQAAAAAAAoI5A9ihcj8LrkkAAAAAAAMCSQHA9CtcjaZNArkfhehTUk0AAAAAAAKySQAAAAAAAMJFA","dtype":"float64","order":"little","shape":[51]},"name":["Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere"],"shade":{"__ndarray__":"fe6WiTlZdz997paJOVmHP7U9cq0QZLg/0N0yMSfr0j8n64IRaXbWP8vEnKwLRuQ/yrpgRJqd6T8AAAAAAADwP2RYEm6Ueu8/U/S5Wybm5D/4zdP2yLXqP3nVAAUetOg/YUSanbEp6j/bI9cKQYblP/jN0/bIteI/K//64UvH6z9zsi4YkWbnP/3wpeNVA+w/LhNzsi4Y6T8p9b552h7hPyn1vnnaHuk/NDZFn7tl6j/WBSPS7IztP0SanbEp+uQ/qPKvH7503D9JuFHqffPUP2JJuFHqfdM/bIo+d8vEzD8GI9LsjE3RPwUetDhU+cc/OlkXjEiz0z8KPGhxqPLfPysEGZaEG9U/FHjQ4lDlzz/dLRNzsi64P90tE3OyLrg/xqHKv374sj/O0/bItUKwP1X+9cOXjrc/BiPS7IxNsT+FIMOScKO0P56xKfrcLaM/bY9cKwQZpj+esSn63C2TP3zpeNUABX4/fvO0PXKtcD/98KXjVQNkP/3wpeNVA3Q//euHLx2vej/964cvHa9aPwAAAAAAAAAA","dtype":"float64","order":"little","shape":[51]},"size":[9,16,119,365,433,780,985,1230,1210,804,1027,950,1006,828,720,1068,900,1077,965,659,966,1015,1136,807,548,404,376,278,334,232,380,615,407,308,118,118,93,80,115,85,101,48,55,25,11,7,5,8,10,4,2],"top":{"__ndarray__":"AAAAAADQe0AAAAAAACR9QAAAAAAAkIBA6LSBThtbgUAAAAAAAICBQAAAAAAAIIJAAAAAAABwgkAAAAAAABCDQAAAAAAAEINAAAAAAACwg0AAAAAAACiEQAAAAAAAHoVAAAAAAAC4hUAAAAAAAICGQAAAAAAA0IZAAAAAAABah0AAAAAAABCIQAAAAAAAcIdAAAAAAABgiEAAAAAAANiIQAAAAAAA2IhAAAAAAAD4iEAAAAAAAPCIQAAAAAAAJIpAAAAAAABqikAAAAAAACCMQAAAAAAA+IxAAAAAAAAQjUAAAAAAANyOQAAAAAAAAI5AAAAAAABwjUC4HoXrUcuMQHoUrkfhe45AAAAAAACgjkAAAAAAADyPQOF6FK7HH49AAAAAAAAokUD1KFyPwsqRQAAAAAAAdpFAMzMzMzP1kEDXo3A9CoSRQAAAAAAA4I9AAAAAAADgkkAAAAAAAFiTQFK4HoVrQJFAAAAAAAAolEAAAAAAABSUQAAAAAAARpVAAAAAAABylUAAAAAAABqTQHTaQKeNgZFA","dtype":"float64","order":"little","shape":[51]},"width":[1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157,1.8627450980392157],"x":{"__ndarray__":"AAAAAAAALkBmZmZmZuYwQM3MzMzMzDJAMzMzMzOzNECamZmZmZk2QAAAAAAAgDhAZmZmZmZmOkDMzMzMzEw8QDMzMzMzMz5AzMzMzMwMQEAAAAAAAABBQDMzMzMz80FAZmZmZmbmQkCamZmZmdlDQMzMzMzMzERAAAAAAADARUAzMzMzM7NGQGZmZmZmpkdAmZmZmZmZSEDNzMzMzIxJQAAAAAAAgEpAMzMzMzNzS0BmZmZmZmZMQJmZmZmZWU1AzMzMzMxMTkAAAAAAAEBPQJqZmZmZGVBAMzMzMzOTUEDMzMzMzAxRQGZmZmZmhlFAAAAAAAAAUkCamZmZmXlSQDMzMzMz81JAzMzMzMxsU0BmZmZmZuZTQAAAAAAAYFRAmZmZmZnZVEAzMzMzM1NVQM3MzMzMzFVAZmZmZmZGVkAAAAAAAMBWQJmZmZmZOVdAMzMzMzOzV0DNzMzMzCxYQGZmZmZmplhAAAAAAAAgWUCZmZmZmZlZQDMzMzMzE1pAzMzMzMyMWkBmZmZmZgZbQAAAAAAAgFtA","dtype":"float64","order":"little","shape":[51]}},"selected":{"id":"1518"},"selection_policy":{"id":"1517"}},"id":"1383","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1384"}},"id":"1494","type":"CDSView"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0},"fill_color":{"value":"white"},"left":{"field":"left"},"line_alpha":{"value":0.9},"line_color":{"value":"#005500"},"right":{"field":"right"},"top":{"field":"top"}},"id":"1491","type":"Quad"},{"attributes":{"source":{"id":"1385"}},"id":"1499","type":"CDSView"},{"attributes":{"use_scientific":false},"id":"1500","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"1452"}},"id":"1448","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1446"},{"id":"1447"},{"id":"1448"},{"id":"1449"},{"id":"1450"},{"id":"1451"}]},"id":"1453","type":"Toolbar"},{"attributes":{},"id":"1518","type":"Selection"},{"attributes":{"data_source":{"id":"1385"},"glyph":{"id":"1496"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1497"},"selection_glyph":null,"view":{"id":"1499"}},"id":"1498","type":"GlyphRenderer"},{"attributes":{},"id":"1515","type":"BasicTickFormatter"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"white"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#005500"},"right":{"field":"right"},"top":{"field":"top"}},"id":"1497","type":"Quad"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0},"fill_color":{"value":"white"},"left":{"field":"left"},"line_alpha":{"value":0.9},"line_color":{"value":"#005500"},"right":{"field":"right"},"top":{"field":"top"}},"id":"1496","type":"Quad"},{"attributes":{},"id":"1509","type":"Selection"},{"attributes":{},"id":"1528","type":"BasicTickFormatter"},{"attributes":{},"id":"1526","type":"Selection"},{"attributes":{"data":{"bottom":{"__ndarray__":"MzMzMzNLcUDTBjptoNdzQHTaQKcNZHZAFK5H4XrweEC0gU4b6Hx7QFVVVVVVCX5AehSuR+FKgEBLfrHkF5GBQBvotIFO14JA61G4HoUdhEC8u7u7u2OFQIwlv1jyqYZAXI/C9Sjwh0As+cWSXzaJQPxiyS+WfIpAzMzMzMzCi0CcNtBpAwmNQGyg0wY6T45APArXo3CVj0AHOm2g022QQO/u7u7uEJFA16NwPQq0kUC/WPKLJVeSQKcNdNpA+pJAj8L1KFydk0B3d3d3d0CUQF8s+cWS45RASOF6FK6GlUAwlvxiySmWQBhLfrHkzJZA","dtype":"float64","order":"little","shape":[30]},"left":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"right":[18,32,62,148,536,1292,2131,2778,2331,2744,2893,2096,1928,1191,989,738,493,499,273,150,141,88,100,57,33,33,23,24,7,12],"top":{"__ndarray__":"0wY6baDXc0B02kCnDWR2QBSuR+F68HhAtIFOG+h8e0BVVVVVVQl+QHoUrkfhSoBAS36x5BeRgUAb6LSBTteCQOtRuB6FHYRAvLu7u7tjhUCMJb9Y8qmGQFyPwvUo8IdALPnFkl82iUD8YskvlnyKQMzMzMzMwotAnDbQaQMJjUBsoNMGOk+OQDwK16NwlY9ABzptoNNtkEDv7u7u7hCRQNejcD0KtJFAv1jyiyVXkkCnDXTaQPqSQI/C9ShcnZNAd3d3d3dAlEBfLPnFkuOUQEjhehSuhpVAMJb8YskplkAYS36x5MyWQAAAAAAAcJdA","dtype":"float64","order":"little","shape":[30]}},"selected":{"id":"1526"},"selection_policy":{"id":"1525"}},"id":"1385","type":"ColumnDataSource"},{"attributes":{},"id":"1517","type":"UnionRenderers"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"field":"shade"},"fill_color":{"value":"#005500"},"line_alpha":{"value":0.7},"line_color":{"value":"#005500"},"top":{"field":"top"},"width":{"field":"width"},"x":{"field":"x"}},"id":"1418","type":"VBar"},{"attributes":{"data":{"bottom":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"left":[15.0,16.9,18.8,20.7,22.6,24.5,26.4,28.299999999999997,30.2,32.099999999999994,34.0,35.9,37.8,39.7,41.599999999999994,43.5,45.4,47.3,49.199999999999996,51.1,53.0,54.9,56.8,58.699999999999996,60.599999999999994,62.5,64.4,66.3,68.19999999999999,70.1,72.0,73.9,75.8,77.69999999999999,79.6,81.5,83.39999999999999,85.3,87.2,89.1,91.0,92.89999999999999,94.8,96.7,98.6,100.5,102.39999999999999,104.3,106.19999999999999,108.1],"right":[16.9,18.8,20.7,22.6,24.5,26.4,28.299999999999997,30.2,32.099999999999994,34.0,35.9,37.8,39.7,41.599999999999994,43.5,45.4,47.3,49.199999999999996,51.1,53.0,54.9,56.8,58.699999999999996,60.599999999999994,62.5,64.4,66.3,68.19999999999999,70.1,72.0,73.9,75.8,77.69999999999999,79.6,81.5,83.39999999999999,85.3,87.2,89.1,91.0,92.89999999999999,94.8,96.7,98.6,100.5,102.39999999999999,104.3,106.19999999999999,108.1,110.0],"top":[9,16,119,365,433,780,985,1230,1210,804,1027,950,1006,828,720,1068,900,1077,965,659,966,1015,1136,807,548,404,376,278,334,232,380,615,407,308,118,118,93,80,115,85,101,48,55,25,11,7,5,8,10,6]},"selected":{"id":"1509"},"selection_policy":{"id":"1508"}},"id":"1384","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"1503","type":"Title"},{"attributes":{"text":""},"id":"1522","type":"Title"},{"attributes":{},"id":"1451","type":"HelpTool"},{"attributes":{},"id":"1525","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1452","type":"BoxAnnotation"},{"attributes":{},"id":"1508","type":"UnionRenderers"},{"attributes":{"background_fill_color":"#eeeeee","below":[{"id":"1395"}],"center":[{"id":"1398"},{"id":"1402"}],"left":[{"id":"1399"}],"min_border_top":0,"plot_height":500,"renderers":[{"id":"1421"},{"id":"1428"}],"title":{"id":"1513"},"toolbar":{"id":"1410"},"toolbar_location":null,"x_range":{"id":"1387"},"x_scale":{"id":"1391"},"y_range":{"id":"1389"},"y_scale":{"id":"1393"}},"id":"1386","subtype":"Figure","type":"Plot"}],"root_ids":["1531"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"aa723d78-93a8-4727-a86c-9f2c404da916","root_ids":["1531"],"roots":{"1531":"596b9393-8e96-421f-bfa3-beb914cf3a4a"}}];
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