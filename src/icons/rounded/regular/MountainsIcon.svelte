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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 8a4 4 0 0 1 0-8 4 4 0 0 1 0 8Zm0-6a2 2 0 0 0 0 4 2 2 0 0 0 0-4Zm1.452 22h-8.863a2.548 2.548 0 0 1-2.221-1.26 2.463 2.463 0 0 1-.029-2.471l4.436-7.959a2.6 2.6 0 0 1 4.5 0l4.425 7.953a2.468 2.468 0 0 1-.028 2.475A2.551 2.551 0 0 1 21.452 24Zm-4.429-11a.56.56 0 0 0-.5.283l-4.436 7.959a.473.473 0 0 0 .006.485.559.559 0 0 0 .5.273h8.863a.562.562 0 0 0 .5-.275.479.479 0 0 0 0-.489l-4.432-7.952a.558.558 0 0 0-.501-.284ZM8 23a1 1 0 0 0-1-1H3.35a1.349 1.349 0 0 1-1.184-1.994l6.652-12.3A1.329 1.329 0 0 1 10 7a1.326 1.326 0 0 1 1.183.706l1.227 2.267a1 1 0 1 0 1.76-.952l-1.226-2.266a3.344 3.344 0 0 0-5.885 0l-6.653 12.3A3.351 3.351 0 0 0 3.35 24H7a1 1 0 0 0 1-1Z"/></svg>
  