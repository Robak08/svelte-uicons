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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-notes {customClass}"><path d="M16 23a1 1 0 0 1-1 1H9c-4.962 0-9-4.037-9-9V8a1 1 0 1 1 2 0v7c0 3.859 3.14 7 7 7h6a1 1 0 0 1 1 1Zm8-18v6.616c0 1.336-.52 2.591-1.464 3.535l-3.678 3.677A3.973 3.973 0 0 1 16.03 20H9c-2.757 0-5-2.243-5-5V5c0-2.757 2.244-5 5-5h10c2.757 0 5 2.243 5 5ZM9 18h6v-4c0-1.654 1.346-3 3-3h4V5c0-1.654-1.346-3-3-3H9C7.346 2 6 3.346 6 5v10c0 1.654 1.346 3 3 3Zm12.122-4.263a3 3 0 0 0 .526-.737H18a1 1 0 0 0-1 1v3.74c.159-.089.312-.193.444-.325l3.678-3.677Z"/></svg>
  