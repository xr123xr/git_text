        const uploadBox = document.getElementById('uploadBox');
        const fileInput = document.getElementById('fileInput');
        const slg = document.querySelector('.plus-sign')

        const { createEditor, createToolbar } = window.wangEditor


         slg.addEventListener('click', ()=> {
            fileInput.click(); // 觸發文件選擇對話框
            document.querySelector('#previewImage').addEventListener('change',async e =>{
                const file = e.target.files[0]
                const fd = new FormData()
                fd.append('image',file)
                const res = await axios({
                    url:'/v1_0/upload',
                    method:'POST',
                    data:fd
                })
                console.log(res);
                const img = res.data.url
                document.querySelector('#previewImage').src = img
        })
    });
       

    const editorConfig = {
        placeholder: 'Type here...',
        onChange(editor) {
        const html = editor.getHtml()
        console.log('editor content', html)
        // 也可以同步到 <textarea>
        },
    }

    const editor = createEditor({
        selector: '#editor-container',
        html: '<p><br></p>',
        config: editorConfig,
        mode: 'default', // or 'simple'
    })

    const toolbarConfig = {}

    const toolbar = createToolbar({
        editor,
        selector: '#toolbar-container',
        config: toolbarConfig,
        mode: 'default', // or 'simple'
    })