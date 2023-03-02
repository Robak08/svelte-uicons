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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.707 22.293-1.546-1.546A4.98 4.98 0 0 0 23 18v-5.69c0-3.433-1.501-6.648-4.119-8.822-2.508-2.085-5.677-2.894-8.919-2.293a10.868 10.868 0 0 0-4.989 2.364L1.707.293A.999.999 0 1 0 .293 1.707l22 22a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Zm-4.981.675c-.104.007-.203.031-.309.031h-5.423c-6.418 0-11.562-4.393-11.966-10.217-.15-2.161.35-4.284 1.38-6.133l16.318 16.319Z"/></svg>
  