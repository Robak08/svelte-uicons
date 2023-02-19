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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-file-export {customClass}"><path d="M18.66 20.9a.989.989 0 0 0-1.41.09c-.57.65-1.39 1.02-2.25 1.02H5c-1.65 0-3-1.35-3-3V5c0-1.65 1.35-3 3-3h4.51c.16 0 .33 0 .49.02V7c0 1.65 1.35 3 3 3h5.81c.31 0 .6-.14.79-.39s.25-.56.18-.86a6.977 6.977 0 0 0-1.83-3.22l-3.48-3.48A6.96 6.96 0 0 0 9.52 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h10c1.43 0 2.8-.62 3.75-1.69a.989.989 0 0 0-.09-1.41ZM12 2.66c.38.22.73.49 1.05.81l3.48 3.48c.31.31.58.67.8 1.05h-4.34c-.55 0-1-.45-1-1V2.66Zm11.13 15.43-1.61 1.61c-.2.2-.45.29-.71.29s-.51-.1-.71-.29a.996.996 0 0 1 0-1.41L21.39 17h-7.4c-.55 0-1-.45-1-1s.45-1 1-1h7.4l-1.29-1.29a.996.996 0 1 1 1.41-1.41l1.61 1.61a2.976 2.976 0 0 1 0 4.19Z"/></svg>
  