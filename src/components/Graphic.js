import React, { useRef, useEffect, useState } from 'react';

const DrawingTool = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000000';
    ctxRef.current = ctx;
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctxRef.current.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    ctxRef.current.closePath();
  };

  const clearCanvas = () => {
    ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  return (
    <div>
      <h1>Drawing Tool</h1>
      <h1><button onClick={clearCanvas}>Clear</button></h1>
      <canvas
        ref={canvasRef}
        width="600"
        height="400"
        style={{ border: '1px solid #000000' }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
    </div>
  );
};

export default DrawingTool;