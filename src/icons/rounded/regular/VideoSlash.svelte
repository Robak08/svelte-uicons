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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 19a1 1 0 0 1-1 1H5c-2.756 0-5-2.243-5-5V9c0-.848.217-1.686.625-2.423a1 1 0 0 1 1.749.971A2.995 2.995 0 0 0 2 9v6c0 1.654 1.346 3 3 3h9a1 1 0 0 1 1 1Zm3.637-2.125c-.033.081-.08.151-.129.218l5.2 5.2a.999.999 0 1 1-1.414 1.414l-18-18-4.001-4A1 1 0 0 1 1.708.293L5.415 4H14c2.618 0 4.748 2.03 4.959 4.594l1.757-1.772c.034-.034.07-.066.109-.096a1.973 1.973 0 0 1 2.078-.188A1.972 1.972 0 0 1 24 8.313v7.319c0 .757-.42 1.437-1.097 1.775a1.977 1.977 0 0 1-2.078-.188 1.028 1.028 0 0 1-.106-.092l-1.754-1.752a4.939 4.939 0 0 1-.328 1.501ZM19 12.583l3.026 3.022L22 8.367l-3 3.027v1.189ZM17 9c0-1.654-1.346-3-3-3H7.414l9.535 9.535A3.06 3.06 0 0 0 17 15V9Z"/></svg>
  