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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13.892 24c-1.96 0-3.837-.008-4.491-.026a3.749 3.749 0 0 1-.834-.121 3.5 3.5 0 0 1-.449-6.588 6.366 6.366 0 0 1 .057-2.732 6 6 0 0 1 11.368-.855c.136.326.763.469.763.469a5.014 5.014 0 0 1 3.559 6 4.951 4.951 0 0 1-3.7 3.7 5.283 5.283 0 0 1-1.064.131c-.872.012-3.088.022-5.209.022ZM8.987 9.755a7.93 7.93 0 0 1 7.178-1.476 1.928 1.928 0 0 0 1.493-.21l2.447-1.429A1 1 0 1 0 19 4.972l-2.641 1.75c-.554.281-.843-.442-1.27-.717l1.843-3.146a1 1 0 0 0-1.727-1.011l-1.821 3.115A6.137 6.137 0 0 0 12 4.577V1a1 1 0 0 0-2 0v3.58a6.5 6.5 0 0 0-1.326.363L6.831 1.834a1 1 0 0 0-1.721 1.02l1.834 3.093a6.718 6.718 0 0 0-.951.934l-3.1-1.814a1 1 0 1 0-1.01 1.725L4.962 8.6a6.206 6.206 0 0 0-.387 1.4H1a1 1 0 0 0 0 2h3.576a6.425 6.425 0 0 0 .2.882.5.5 0 0 1-.3.54l-2.708 1.612a1 1 0 0 0 1.023 1.719l2.59-1.513a1.739 1.739 0 0 0 .83-1.094 7.981 7.981 0 0 1 2.776-4.391Z"/></svg>
  