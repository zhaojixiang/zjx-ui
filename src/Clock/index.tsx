import React, {useEffect} from 'react';

export default () => {

  useEffect(() => {
    drawClock()
  }, [])

  const drawClock = () => {
    let draw: any = document.getElementById('drawing');
    if (draw.getContext) {
      const ctx = draw.getContext("2d");
      // 矩形
      ctx.fillStyle = "pink";
      ctx.fillRect(10, 10, 80, 80);

      ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
      ctx.fillRect(40, 40, 80, 80);

      ctx.clearRect(55, 55, 20, 20);

      // 描边
      ctx.strokeStyle = "red";
      ctx.strokeRect(160, 10, 50, 50);

      ctx.strokeStyle = "pink";
      ctx.strokeRect(180, 30, 50, 50);

      // 路径
      ctx.beginPath();
      ctx.strokeStyle = "gold";
      ctx.arc(200, 200, 60, 0, 2 * Math.PI, false);
      ctx.moveTo(255, 200);
      ctx.arc(200, 200, 55, 0, 10, false);
      ctx.moveTo(200, 200);
      ctx.lineTo(240, 200);
      ctx.moveTo(200, 200);
      ctx.lineTo(200, 150);
      ctx.stroke();

    }
  }

  return <div>
    <canvas id='drawing' width={400} height={400}/>
  </div>
};
