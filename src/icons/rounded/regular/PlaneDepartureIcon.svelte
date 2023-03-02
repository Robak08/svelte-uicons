<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m1.067 15.411 2.075 1.477a6.17 6.17 0 0 0 3.572 1.14c.893 0 1.787-.195 2.612-.59l12.953-5.698a3.036 3.036 0 0 0 1.441-4 3.007 3.007 0 0 0-3.976-1.465l-3.143 1.402-6.619-4.086A2.999 2.999 0 0 0 6.93 3.28l-.781.366A1.993 1.993 0 0 0 5.02 5.171a1.995 1.995 0 0 0 .654 1.783l4.204 3.72-3.591 1.602-3.057-1.122a2.417 2.417 0 0 0-2.735.791 2.312 2.312 0 0 0-.462 1.776 2.527 2.527 0 0 0 1.033 1.688ZM7 5.457l.776-.364c.332-.154.721-.113 1.085.151l5.531 3.418-2.506 1.118L7 5.457Zm-4.929 7.722a.418.418 0 0 1 .334-.169c.05 0 3.574 1.285 3.574 1.285.245.09.515.081.752-.025l13.833-6.171.013-.006a1.003 1.003 0 0 1 1.328.487c.234.507.016 1.114-.46 1.342L8.492 15.62a4.155 4.155 0 0 1-4.191-.362l-2.075-1.476a.528.528 0 0 1-.213-.348.324.324 0 0 1 .058-.256ZM24 23a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h22a1 1 0 0 1 1 1Z"/></svg>
  