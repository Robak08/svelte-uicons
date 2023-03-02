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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.75.3H4.25A4.25 4.25 0 0 0 0 4.55v14.9a4.25 4.25 0 0 0 4.25 4.25h15.5A4.25 4.25 0 0 0 24 19.45V4.55A4.25 4.25 0 0 0 19.75.3zm-3.236 6.611c-.242 0-.363-.182-.439-.439-.257-.97-.591-1.257-.787-1.257-.197 0-.5.364-.833 1.121-.44.954-.735 1.993-1.008 2.993l1.732-.002c.106.212.02.651-.238.772h-1.712c-.56 1.878-1.032 3.688-1.592 5.46-.318 1-.666 1.954-1.106 2.559-.485.681-1.393 1.333-2.484 1.333-.772 0-1.53-.363-1.53-1.166 0-.5.515-.969.924-.969a.46.46 0 0 1 .424.242c.379.681.742 1.075.909 1.075.167 0 .303-.227.576-1.211l1.988-7.322-1.43-.002c-.106-.318.045-.699.226-.775h1.424c.273-.878.594-1.776 1.048-2.579.681-1.226 1.772-2.196 3.271-2.196 1.136 0 1.606.546 1.606 1.242-.015.743-.666 1.121-.969 1.121z"/></svg>
  