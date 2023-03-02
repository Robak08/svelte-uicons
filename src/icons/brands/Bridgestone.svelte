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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2.949 13.551 5.883 3.259c.284-1.058 1.455-2.024 2.637-2.024h8.974c.151 0 .198.196.082.275C12.91 4.704 7.282 9.443 3.204 13.684c-.108.112-.298.022-.255-.133zM10.038 19.73l2.904-10.157c.043-.154-.123-.266-.247-.159C8.422 13.09 3.267 18.458.041 22.519c-.082.104-.04.26.101.26h12.57c5.301 0 8.202-1.643 9.254-5.567.858-3.195-.818-5.376-3.492-5.936-.047-.01-.09-.1 0-.116 2.261-.386 4.544-1.297 5.357-4.596.88-3.571-1.849-5.528-4.99-5.326l-4.804 16.821c-.26.909-1.233 1.673-2.157 1.673h-1.842v-.002z"/></svg>
  