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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11.979 0c3.357 0 6.2 1.164 8.528 3.493C22.835 5.807 24 8.643 24 12c0 3.357-1.143 6.171-3.429 8.443C18.157 22.814 15.293 24 11.979 24c-3.243 0-6.057-1.178-8.443-3.536C1.179 18.107 0 15.286 0 12c0-3.271 1.179-6.107 3.536-8.507C5.864 1.164 8.678 0 11.979 0zm.042 2.164c-2.729 0-5.036.964-6.921 2.893C3.143 7.043 2.164 9.357 2.164 12c0 2.672.971 4.971 2.914 6.9 1.943 1.943 4.257 2.914 6.943 2.914 2.671 0 5-.978 6.986-2.936 1.886-1.828 2.829-4.121 2.829-6.879 0-2.743-.957-5.057-2.871-6.943-1.901-1.927-4.215-2.892-6.944-2.892zm4.522 7.007v2.057H7.821V9.171h8.722zm0 3.858v2.057H7.821v-2.057h8.722z"/></svg>
  