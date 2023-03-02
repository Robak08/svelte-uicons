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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M210.731 386.603c24.986 25.002 65.508 25.015 90.51.029l.029-.029 68.501-68.501c7.902-8.739 7.223-22.23-1.516-30.132-8.137-7.357-20.527-7.344-28.649.03l-62.421 62.443.149-329.109C277.333 9.551 267.782 0 256 0s-21.333 9.551-21.333 21.333l-.192 328.704L172.395 288c-8.336-8.33-21.846-8.325-30.176.011-8.33 8.336-8.325 21.846.011 30.176l68.501 68.416z"/><path d="M490.667 341.333c-11.782 0-21.333 9.551-21.333 21.333V448c0 11.782-9.551 21.333-21.333 21.333H64c-11.782 0-21.333-9.551-21.333-21.333v-85.333c0-11.782-9.551-21.333-21.333-21.333C9.551 341.333 0 350.885 0 362.667V448c0 35.346 28.654 64 64 64h384c35.346 0 64-28.654 64-64v-85.333c0-11.782-9.551-21.334-21.333-21.334z"/></svg>
  