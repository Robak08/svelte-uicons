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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11.979 0c3.371 0 6.214 1.157 8.528 3.472C22.835 5.8 24 8.643 24 12c0 3.372-1.143 6.179-3.429 8.421C18.143 22.807 15.278 24 11.979 24c-3.243 0-6.057-1.179-8.443-3.536C1.179 18.107 0 15.286 0 12c0-3.286 1.179-6.129 3.536-8.528C5.85 1.157 8.664 0 11.979 0zm.042 2.164c-2.729 0-5.036.957-6.921 2.871-1.957 2-2.936 4.321-2.936 6.964 0 2.657.971 4.957 2.914 6.9 1.943 1.943 4.257 2.914 6.943 2.914 2.671 0 5-.978 6.986-2.936 1.886-1.814 2.829-4.107 2.829-6.879 0-2.729-.957-5.05-2.871-6.964-1.915-1.912-4.229-2.87-6.944-2.87zm3.215 6.858v4.907h-1.371v5.828h-3.729v-5.828H8.764V9.022c0-.214.075-.396.225-.547a.744.744 0 0 1 .547-.225h4.929c.2 0 .378.075.536.225a.73.73 0 0 1 .235.547zm-4.907-3.086c0-1.128.557-1.693 1.671-1.693s1.672.564 1.672 1.693c0 1.114-.557 1.671-1.672 1.671s-1.671-.557-1.671-1.671z"/></svg>
  