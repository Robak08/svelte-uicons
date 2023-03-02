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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 2h-1V1a1 1 0 0 0-2 0v1H8V1a1 1 0 0 0-2 0v1H5C2.243 2 0 4.243 0 7v12c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5ZM5 4h14c1.654 0 3 1.346 3 3v1H2V7c0-1.654 1.346-3 3-3Zm14 18H5c-1.654 0-3-1.346-3-3v-9h20v9c0 1.654-1.346 3-3 3Zm-2.603-6.648c0 .379-.264.698-.566.866l-1.564.87.694 1.893a.887.887 0 0 1-1.374 1.006l-1.556-1.203-1.556 1.203a.887.887 0 0 1-1.374-1.006l.694-1.893-1.564-.87c-.302-.168-.566-.487-.566-.866 0-.321.279-.676.731-.676h2.247l.596-2.283a.832.832 0 0 1 .792-.621.832.832 0 0 1 .792.621l.596 2.283h2.247c.452 0 .731.354.731.676Z"/></svg>
  