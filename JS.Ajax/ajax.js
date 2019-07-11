function traerVacantes(id){
      fetch("https://dev.digitalhouse.com/api/getVacantes")
      .then(function(response){
        return response.json();
      })
      .then(function(datos){
        console.log(datos);
        var ul = document.querySelector('ul.vacantes');
        console.log(ul);
        ul.innerHTML = "";

        for (var i = 0; i < datos.data.length; i++) {
          if(datos.data[i].comision_id == id){
            console.log(datos.data[i]);
            var li = document.createElement('li');
            li.innerHTML = '<a href="#">'+datos.data[i].id+' Disponibles:'+datos.data[i].disponibles+' - Reservadas: '+datos.data[i].reservadas+'</a>';
            ul.append(li);
          }
        }
      })
      .catch(function(error){
        console.log(error);
      });
    }

      function traerComisiones(id){
        fetch("https://dev.digitalhouse.com/api/getComisiones")
        .then(function(response){
          return response.json();
        })
        .then(function(datos){
          console.log(datos);
          //vacio las vacantes porque traigo nuevas comisiones
          var ulvacantes = document.querySelector('ul.vacantes');
          ulvacantes.innerHTML = "";
          var ul = document.querySelector('ul.comisiones');
          ul.innerHTML = "";
          for (var i = 0; i < datos.data.length; i++) {
            if(datos.data[i].curso_id == id){
              console.log(datos.data[i]);
              var li = document.createElement('li');
              li.innerHTML = '<a href="#" onclick="traerVacantes('+datos.data[i].id+');">'+datos.data[i].id+' Sede:'+datos.data[i].sede+' - Turno: '+datos.data[i].turno+'</a>';
              ul.append(li);
            }
          }
        })
        .catch(function(error){
          console.log(error);
        });
      }

      fetch("https://dev.digitalhouse.com/api/getCursos")
      .then(function(response){
        return response.json();
      })
      .then(function(datos){
        console.log(datos);
        var ul = document.querySelector('ul');
        for (var i = 0; i < datos.data.length; i++) {
          console.log(datos.data[i].curso)
          var li = document.createElement('li');
          //li.innerText = datos.data[i].curso;
          li.innerHTML = '<a href="#" onclick="traerComisiones('+datos.data[i].id+');">'+datos.data[i].curso+'</a>';
          ul.append(li);
        }
      })
      .catch(function(error){
        console.log(error);
      });
