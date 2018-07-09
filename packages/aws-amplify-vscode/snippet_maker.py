guides = ['analytics_guide.md','angular_guide.md','api_guide.md','authentication_guide.md','cache_guide.md','hub_guide.md','i18n_guide.md','interactions_guide.md','logger_guide.md','pub_sub_guide.md','push_notifications_setup.md','storage_guide.md']
filestart = '/Users/praegt/Documents/aws-amplify-tools-vscode/docs/media/'
snippets = open('snippets/auto.code-snippets','w')
docs = open('auto_snippet_documentation.md','w')
docs.write('# Automatically Generated Snippet Documentation\n')
snippets.write('{\n')
for guide in guides:
    snippet_index = 1
    _guide_index = guide.find('_guide')
    title = guide[:_guide_index]
    f = open(filestart + guide,'r')
    lines = f.readlines()
    f.close()
    line_index = 0
    while line_index < len(lines):
        if lines[line_index] == '```js\n':
            docs.write('##### prefix: ' + title + ' ' + str(snippet_index) + '\n' + '```js\n')
            snippets.write('    "' + title + ' ' + str(snippet_index) + '": {\n')
            snippets.write('        "prefix": "' + title + ' ' + str(snippet_index) + '",\n')
            snippets.write('        "scope": "javascript,javascriptreact",\n')
            snippets.write('        "body": [\n')           
            line_index += 1
            while lines[line_index] != '```\n':
                docs.write(lines[line_index] + '\n')
                line_str = '            "'
                space_count = 0
                for char in lines[line_index]:
                    if char == ' ':
                        space_count += 1
                    else:
                        line_str += '\\t'*int(space_count/4)
                        lines[line_index] = lines[line_index][space_count:]
                        break
                for char in lines[line_index]:
                    if char == '"':
                        line_str += '\\"'
                    elif char == "$":
                        line_str += '\\\$'
                    elif char == '\n':
                        pass 
                    else:
                        line_str += char
                line_str += '",'
                snippets.write(line_str + '\n')
                line_index += 1
            docs.write('```\n')
            snippets.write('        ]\n')
            snippets.write('    },\n')
            snippet_index += 1
        line_index += 1
            
snippets.write('}')
snippets.close()
docs.close()


