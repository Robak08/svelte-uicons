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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 7V4c0-1.654 1.346-3 3-3h3c1.654 0 3 1.346 3 3v3c0 1.654-1.346 3-3 3h-3c-1.654 0-3-1.346-3-3Zm9.196 12.583-2.689-4.387c-.399-.737-1.169-1.195-2.007-1.195s-1.608.458-1.981 1.149l-2.741 4.479c-.387.714-.37 1.558.046 2.256S14.973 23 15.786 23h5.43c.812 0 1.546-.417 1.962-1.115s.433-1.542.02-2.302ZM11.707 6.293a.999.999 0 0 0 0-1.414L7.414.586C7.024.196 6.512 0 6 0S4.976.195 4.586.585L.293 4.879a.999.999 0 1 0 1.414 1.414L5 3v20a1 1 0 1 0 2 0V3l3.293 3.293a.999.999 0 0 0 1.414 0Z"/></svg>
  