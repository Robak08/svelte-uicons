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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4.343 11H0a5.006 5.006 0 0 1 5-5h6V1.636A1.637 1.637 0 0 1 13.33.154l3.2 1.5a1 1 0 0 1 0 1.7L13 5v1h6a5.006 5.006 0 0 1 5 5h-4.343a3 3 0 0 1-2.092-.849l-2.736-2.979a4.074 4.074 0 0 0-5.687.03l-2.678 2.919A3.017 3.017 0 0 1 4.343 11zM12 19a1 1 0 0 0-1 1v4h2v-4a1 1 0 0 0-1-1zm7.657-6H24v8a3 3 0 0 1-3 3h-6v-4a3 3 0 0 0-6 0v4H3a3 3 0 0 1-3-3v-8h4.343a4.994 4.994 0 0 0 3.565-1.495l2.678-2.919a2.07 2.07 0 0 1 2.8-.03l2.738 2.979A4.968 4.968 0 0 0 19.657 13zM6 21a1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1zm0-4a1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1zm8-4a2 2 0 1 0-2 2 2 2 0 0 0 2-2zm7 8a1 1 0 0 0-1-1h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1zm-1-5h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z"/></svg>
  