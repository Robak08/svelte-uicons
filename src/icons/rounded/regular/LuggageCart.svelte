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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 18a1 1 0 0 0-1-1H9c-1.654 0-3-1.346-3-3V5c0-2.757-2.243-5-5-5a1 1 0 1 0 0 2c1.654 0 3 1.346 3 3v9a5.005 5.005 0 0 0 2.681 4.428A3.478 3.478 0 0 0 6 20.5C6 22.43 7.57 24 9.5 24a3.504 3.504 0 0 0 3.162-5h4.677a3.504 3.504 0 0 0 3.162 5c1.93 0 3.5-1.57 3.5-3.5 0-.608-.156-1.18-.43-1.679a.998.998 0 0 0 .43-.821Zm-13 2.5c0 .827-.673 1.5-1.5 1.5S8 21.327 8 20.5 8.673 19 9.5 19s1.5.673 1.5 1.5Zm9.5 1.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5ZM20 4V3c0-1.654-1.346-3-3-3h-2c-1.654 0-3 1.346-3 3v1C9.794 4 8 5.794 8 8v3c0 2.206 1.794 4 4 4h8c2.206 0 4-1.794 4-4V8c0-2.206-1.794-4-4-4Zm-6-1c0-.551.448-1 1-1h2c.552 0 1 .449 1 1v1h-4V3Zm4 3v7h-4V6h4Zm-8 5V8c0-1.103.897-2 2-2v7c-1.103 0-2-.897-2-2Zm12 0c0 1.103-.897 2-2 2V6c1.103 0 2 .897 2 2v3Z"/></svg>
  