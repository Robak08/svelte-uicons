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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.13 18.09-1.61 1.61c-.2.2-.45.29-.71.29s-.51-.1-.71-.29a.996.996 0 0 1 0-1.41L21.39 17h-7.4c-.55 0-1-.45-1-1s.45-1 1-1h7.4l-1.29-1.29a.996.996 0 1 1 1.41-1.41l1.61 1.61a2.976 2.976 0 0 1 0 4.19ZM13 8h6.54c-.35-.91-.88-1.75-1.59-2.46l-3.48-3.49A7.037 7.037 0 0 0 12.01.46V7c0 .55.45 1 1 1Zm4.81 11H14c-1.65 0-3-1.35-3-3s1.35-3 3-3h3.81c0-.77.29-1.54.88-2.12.37-.37.82-.63 1.29-.76V10H13c-1.65 0-3-1.35-3-3V.02C9.84.01 9.68 0 9.51 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h10c1.81 0 3.4-.97 4.28-2.42A3 3 0 0 1 17.81 19Z"/></svg>
  