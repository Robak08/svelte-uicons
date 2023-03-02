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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 14.556V13c0-2.206-1.794-4-4-4s-4 1.794-4 4v1.556c-1.19.694-2 1.97-2 3.444v2c0 2.206 1.794 4 4 4h4c2.206 0 4-1.794 4-4v-2c0-1.474-.81-2.75-2-3.444ZM18 20.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 20.5Zm2-6.5h-4v-1c0-1.103.897-2 2-2s2 .897 2 2v1Zm4-5.359V9c0 .602-.182 1.161-.489 1.632A6.006 6.006 0 0 0 18 7c-2.964 0-5.426 2.162-5.908 4.991-.031 0-.06.009-.092.009-1.654 0-3-1.346-3-3a1 1 0 1 0-2 0c0 1.654-1.346 3-3 3H3c-1.654 0-3-1.346-3-3v-.359l1.209-5.015A5.023 5.023 0 0 1 6.017 0H7v4a1 1 0 0 0 2 0V0h6v4a1 1 0 0 0 2 0V0h.983a5.023 5.023 0 0 1 4.808 3.626L24 8.641ZM10 18v2a5.97 5.97 0 0 0 1.54 4H5a4 4 0 0 1-4-4v-6.424A4.967 4.967 0 0 0 3 14h1a4.997 4.997 0 0 0 4-2.003 4.995 4.995 0 0 0 3.576 1.977A5.987 5.987 0 0 0 10 17.999Z"/></svg>
  