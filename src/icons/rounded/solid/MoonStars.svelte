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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.009 24A12.067 12.067 0 0 1 .075 10.725 12.121 12.121 0 0 1 10.1.152a13 13 0 0 1 5.03.206 2.5 2.5 0 0 1 1.8 1.8 2.47 2.47 0 0 1-.7 2.425c-4.559 4.168-4.165 10.645.807 14.412a2.5 2.5 0 0 1-.7 4.319 13.875 13.875 0 0 1-4.328.686ZM20.5 12a1 1 0 0 1-.97-.757l-.358-1.43-1.432-.385a1 1 0 0 1 .035-1.94l1.4-.325.351-1.406a1 1 0 0 1 1.94 0l.355 1.418 1.418.355a1 1 0 0 1 0 1.94l-1.418.355-.355 1.418A1 1 0 0 1 20.5 12Zm2.5 5.015a1 1 0 0 0 0 2 1 1 0 0 0 0-2Zm-6-4a1 1 0 0 0 0 2 1 1 0 0 0 0-2Z"/></svg>
  