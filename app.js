/*      let canvas = document.getElementById("canvas");
      let ctx = canvas.getContext("2d");
      let rows = 10;
      let cols = 10;
      let snake = [
        { x: 2, y: 3 },
        { x: 3, y: 3 },
        { x: 4, y: 3 }
      ];
      let food = { x: 5, y: 5 };
      let cellWidth = canvas.width / cols;
      let cellHeight = canvas.height / rows;
      let direction = "LEFT";

      draw();

      function draw() {


        //Playground
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height); // canvas.width + .height, für sppätere änderungen der Spielfeld größe

        //Snake

        ctx.fillStyle = "white";

        // ctx.fillRect(130, 170, 30 -1, 30 -1);// zusätzliche vierecke hinzufügen = x-acshe erhöhen (130,y,...) (160,y,...)  // -1 erschafft eine lücke zwischen den verschiedenen vierecken 

        add(100, 150);
        add(130, 150);
        add(160, 150);
        add(190, 150);
        
        //Food
       ctx.fillStyle = "yellow";
        add(290, 230);
      } */