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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 12.111V5c-.211-6.609-9.791-6.6-10 0v7.111C7.666 16.363 10.922 24.117 17 24c6.077.117 9.335-7.638 5-11.889ZM17 20a3.007 3.007 0 0 1-1-5.828V8a1 1 0 0 1 2 0v6.172A3.007 3.007 0 0 1 17 20ZM9.41 2.764a2.036 2.036 0 0 1-.42.323L9 12.854a1 1 0 0 1-1 1l-1.066 1.062A1 1 0 0 1 5.52 13.5l1.056-1.056A2 2 0 0 1 7 12.12v-1.086a3.485 3.485 0 0 1-1.841-.865l-.96.557a2.038 2.038 0 0 1-.066.528L3.75 12.7a1 1 0 1 1-1.934-.512l.384-1.444-1.455-.4a1 1 0 1 1 .512-1.933l1.443.383a2.022 2.022 0 0 1 .492.2l.923-.536a3.521 3.521 0 0 1 .009-1.82L3.193 6.1a2.015 2.015 0 0 1-.491.2l-1.446.382a1 1 0 1 1-.512-1.931l1.445-.381-.373-1.462A1 1 0 0 1 3.75 2.4l.383 1.445a1.972 1.972 0 0 1 .067.525l.988.575A3.494 3.494 0 0 1 7 4.106V3.091a2.068 2.068 0 0 1-.428-.327L5.506 1.707A1 1 0 0 1 6.92.293L7.977 1.35 9.053.293a1 1 0 1 1 1.414 1.414Z"/></svg>
  