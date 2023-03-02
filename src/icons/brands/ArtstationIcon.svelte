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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m0 17.725 2.031 3.504A2.423 2.423 0 0 0 4.2 22.564h13.457l-2.792-4.839H0zM24 17.749c0-.485-.146-.939-.388-1.311L15.73 2.723a2.416 2.416 0 0 0-2.144-1.287H9.419l12.178 21.103 1.918-3.326c.388-.638.485-.914.485-1.464z"/><path d="M12.874 14.286 7.428 4.851 1.982 14.286z"/></svg>
  