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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.036 24H3.964a3.955 3.955 0 0 1-3.542-5.733L8.459 2.189A3.932 3.932 0 0 1 11.736.008a3.977 3.977 0 0 1 3.805 2.181l8.037 16.078A3.961 3.961 0 0 1 20.036 24ZM2 20.043A1.973 1.973 0 0 0 3.964 22h16.072A1.973 1.973 0 0 0 22 20.043a1.95 1.95 0 0 0-.212-.881L13.753 3.083a1.959 1.959 0 0 0-3.506 0L2.21 19.162a1.95 1.95 0 0 0-.21.881Z"/></svg>
  