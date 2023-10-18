import Header from '../components/Header';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {BLOCKS} from '@contentful/rich-text-types';

import {useEffect, useState} from 'react'

function Methods () { 

    const [page, setPage] = useState()
    const query = `
    {
        methodsContentCollection(limit:1) { 
            items { 
                document { 
                    json
                    links { 
                        assets { 
                            block { 
                                title 
                                url
                                sys { 
                                    id
                                }
                            }
                        }
                    }
                }
            }
        }
    }

`
    // todo: turn into util
    useEffect(() => {
        window
          .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Authenticate the request
              Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_TOKEN}`,
            },
            // send the GraphQL query
            body: JSON.stringify({ query }),
          })
          .then((response) => response.json())
          .then(({ data, errors }) => {
            if (errors) {
              console.error(errors);
            }
            console.log(data.methodsContentCollection,"dat")
            // rerender the entire component with new data
            setPage(data.methodsContentCollection.items[0]);
          });
      }, [query]);

    if (!page) {
        return "Loading...";
    }
 
    console.log(BLOCKS)
    function options (links) {
          // create an asset map
        const assetMap = new Map();
        // loop through the assets and add them to the map
        for (const asset of links.assets.block) {
            assetMap.set(asset.sys.id, asset);
        }

        return { 
            renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {

                const asset = assetMap.get(node.data.target.sys.id);

                console.log(node.data.target.sys, "lol")
                return <img alt={asset.title} src={asset.url}></img>
            }
            }
        }
    };

    const document = documentToReactComponents(page.document.json, options(page.document.links));
    console.log(document)
      

    return <div> 
        <header>
            <Header/>
        </header>
        <div className="content-container-white"> 
            <div className="sub-page-container">
                {document}
            </div>
        </div>
    </div>
}

export default  Methods