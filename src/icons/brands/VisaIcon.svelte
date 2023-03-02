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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m9.113 8.261-3.142 7.497h-2.05L2.376 9.775c-.095-.369-.176-.503-.462-.66C1.447 8.863.678 8.626 0 8.478l.047-.218h3.299c.421 0 .799.281.894.764l.817 4.339L7.075 8.26h2.038zm8.031 5.048c.009-1.977-2.736-2.085-2.716-2.97.005-.27.261-.556.822-.628.278-.037 1.044-.064 1.913.334l.34-1.589a5.203 5.203 0 0 0-1.814-.332c-1.917 0-3.266 1.019-3.277 2.478-.013 1.079.963 1.681 1.698 2.04.755.368 1.008.602 1.005.932-.005.503-.603.723-1.16.733-.975.015-1.541-.264-1.993-.474l-.351 1.644c.452.208 1.29.388 2.157.399 2.037 0 3.37-1.009 3.376-2.567m5.062 2.448H24L22.435 8.26h-1.656a.885.885 0 0 0-.826.55l-2.908 6.947h2.036l.404-1.12h2.488l.233 1.12zm-2.164-2.656 1.021-2.815.587 2.815h-1.608zm-8.158-4.84-1.605 7.497H8.34l1.605-7.497h1.939z"/></svg>
  