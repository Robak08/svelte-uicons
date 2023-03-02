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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM2 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm9-3a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm12 2H6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2Zm4.441-14.619C17.952.894 6.045.893 1.554 5.381A5.247 5.247 0 0 0 0 9.153l.081 1.126c0 1.5 1.221 2.721 2.721 2.721.044 0 2.522-.322 2.522-.322a2.725 2.725 0 0 0 2.648-2.654l.157-1.802a10.68 10.68 0 0 1 3.863-.744c1.266.006 2.566.26 3.875.754l.155 1.792a2.725 2.725 0 0 0 2.648 2.654s2.479.322 2.522.322c1.5 0 2.721-1.221 2.719-2.651l.085-1.264c0-1.383-.552-2.698-1.557-3.704Z"/></svg>
  