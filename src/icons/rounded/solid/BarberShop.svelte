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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11.828 16.462a53.471 53.471 0 0 1-3.685-5.776C9.665 7.709 11 4.189 11 1a1 1 0 0 0-2 0 18.683 18.683 0 0 1-1.995 7.431A18.694 18.694 0 0 1 5 1a1 1 0 0 0-2 0c0 3.174 1.342 6.7 2.868 9.685a50.636 50.636 0 0 1-3.695 5.777A3.986 3.986 0 1 0 7 22.618a3.985 3.985 0 1 0 4.828-6.156ZM4 22a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm.883-5.895a50.253 50.253 0 0 0 2.122-3.342c.784 1.35 1.534 2.5 2.117 3.341A3.984 3.984 0 0 0 7 17.382a3.989 3.989 0 0 0-2.117-1.277ZM10 22a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm8-16v2h5a1 1 0 0 1 0 2h-5v2h5a1 1 0 0 1 0 2h-5v2h5a1 1 0 0 1 0 2h-5v5a1 1 0 0 1-2 0V5a5.006 5.006 0 0 1 5-5h2a1 1 0 0 1 0 2h-2a3 3 0 0 0-2.816 2H23a1 1 0 0 1 0 2Z"/></svg>
  