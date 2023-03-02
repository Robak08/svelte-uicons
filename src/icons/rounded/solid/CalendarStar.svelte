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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 19c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-9H0v9Zm8.397-3.323h2.247l.596-2.283a.832.832 0 0 1 .792-.621.832.832 0 0 1 .792.621l.596 2.283h2.247c.452 0 .731.354.731.676 0 .379-.264.698-.566.866l-1.564.87.694 1.893a.887.887 0 0 1-1.374 1.006l-1.556-1.203-1.556 1.203a.887.887 0 0 1-1.374-1.006l.694-1.893-1.564-.87c-.302-.168-.566-.487-.566-.866 0-.321.279-.676.731-.676ZM24 7v1H0V7c0-2.757 2.243-5 5-5h1V1a1 1 0 0 1 2 0v1h8V1a1 1 0 0 1 2 0v1h1c2.757 0 5 2.243 5 5Z"/></svg>
  