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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9.707 16.06a1 1 0 0 1 0 1.414L5.685 21.5l.2.2a1 1 0 0 0 1.415.014 1 1 0 0 1 1.4 1.429 3.007 3.007 0 0 1-4.243-.043l-2.8-2.857a1 1 0 1 1 1.427-1.4l1.2 1.225 4.009-4.008a1 1 0 0 1 1.414 0ZM20 21a3 3 0 0 1-3 3h-4a1 1 0 0 1 0-2h2v-3.726l-4.94-4.693A3.35 3.35 0 0 1 10 8.784L12.781 6H5a1 1 0 0 1 0-2h8.144a5.007 5.007 0 0 1 3.206 1.163l.671.56a3 3 0 0 1 .1 4.337l-3.831 3.83 3.4 3.229a1 1 0 0 1 .311.725V22a1 1 0 0 0 1-1 1 1 0 0 1 2 0Zm-8.983-9.831a1.337 1.337 0 0 0 .42.961l.4.383 3.865-3.865a1 1 0 0 0-.016-1.432l-.618-.516c-.029-.024-.063-.041-.092-.064L11.411 10.2a1.345 1.345 0 0 0-.394.969ZM19.5-.045a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.5Z"/></svg>
  