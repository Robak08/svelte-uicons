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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 19.732a10.957 10.957 0 0 0-.642-3.7l-.968-2.713A5.009 5.009 0 0 0 17.681 10h-2.362a5.009 5.009 0 0 0-4.709 3.318l-.968 2.714c-.655 1.942-1.5 5.513 1.358 5.952v.516a1.5 1.5 0 0 0 3 0V22h5v.5a1.5 1.5 0 0 0 3 0v-.516a2.272 2.272 0 0 0 2-2.252ZM15.319 12h2.362a3.008 3.008 0 0 1 2.826 1.991l.36 1.009h-8.734l.36-1.009A3.008 3.008 0 0 1 15.319 12Zm6.413 8H11.268a.268.268 0 0 1-.268-.268A8.972 8.972 0 0 1 11.425 17H13v1a1 1 0 0 0 2 0v-1h3v1a1 1 0 0 0 2 0v-1h1.575A8.972 8.972 0 0 1 22 19.732a.268.268 0 0 1-.268.268ZM5 2a3 3 0 0 0-3 3v18a1 1 0 0 1-2 0V5a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v2a1 1 0 0 1-2 0V5a3 3 0 0 0-3-3Zm2 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1Zm0 5v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1Zm0 5v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1Zm0 5v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1Zm4-16a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"/></svg>
  