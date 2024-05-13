
import { useCommonController } from "./CommonController";
import { WORKDIRS_LABELS, WORKDIRS_KEYS } from "../common/Consts";
import { useEffect, useState } from "react";
import { VSCodeDropdown, VSCodeOption } from "@vscode/webview-ui-toolkit/react";
import { Box, CircularProgress, Link, Typography } from "@mui/material";
import { VSCode } from "../lib/VSCode";
import { WorkdirCommand } from "../common/ViewMessages";
import { WEBVIEW_EXPLORER } from "../../../src/common/Consts";
import { ExplorerTreeView } from "./ExplorerTreeView";

export const ExplorerController = () => {
  const {common, workdirs, commonTrigger, packagesTrigger} = useCommonController(WEBVIEW_EXPLORER, {trackPackages: true});

  const [requestedActive, setRequestedActive] = useState("");
  const [dropdownActive, setDropdownActive] = useState(common.current.activeWorkdir);

  
  const handleDropdownChange = (event: any) => {
    const newValue = event.target.value;
    if (newValue !== common.current.activeWorkdir) {    
      setRequestedActive(newValue);
      setDropdownActive(newValue);
      // Do CLI "set-active" to the requested workdir.
      const workdirIdx = WORKDIRS_KEYS.indexOf(newValue);
      if (workdirIdx !== -1) {
        VSCode.postMessage(new WorkdirCommand(WEBVIEW_EXPLORER,workdirIdx, "set-active"));
      }
      
    } else {
      setRequestedActive("");
      setDropdownActive(common.current.activeWorkdir);
    }
  };

  useEffect(() => {
    if (requestedActive !== "") {
      // User requested a change, keep it that way until the backend confirms.
      if (requestedActive === common.current.activeWorkdir) {
        // Matching with backend. Clear the request, make sure the UI matches.
        setRequestedActive("");
        setDropdownActive(common.current.activeWorkdir);
      }
    } else {
      // No request, so match the backend.
      if (dropdownActive !== common.current.activeWorkdir) {
        setDropdownActive(common.current.activeWorkdir);
      }
    }
    return () => {};
  }, [requestedActive, dropdownActive, common.current.activeWorkdir, commonTrigger]);


  return (
        <>
        {common.current.setupIssue && <Typography variant="body2">{common.current.setupIssue}</Typography>}
        <Box flexDirection="column" justifyContent="center" width="100%" paddingLeft={1} paddingTop={1}>
          {common.current.activeLoaded && !common.current.setupIssue? (
            <>
            <VSCodeDropdown value={dropdownActive}  onChange={handleDropdownChange}>
              {WORKDIRS_KEYS.map((key,index) => (              
                <VSCodeOption
                  key={key}
                  value={key}
                  selected={key === dropdownActive ? true : false}
                >
                  {WORKDIRS_LABELS[index]}
                </VSCodeOption>
              ))}
            </VSCodeDropdown>
            {requestedActive && <CircularProgress size={15} style={{ marginLeft: '3px' }}/>}
            </>
          ) : (<CircularProgress size={15}/>)
          }
        </Box>

        <Box display="flex" justifyContent="center" width="100%" paddingTop={1}>
          <Typography variant="caption" sx={{ alignContent: 'center', fontSize: '9px' }}>Need help? Try the&nbsp;
            <Link color='inherit' href="https://suibase.io/community/" target="_blank" rel="noopener noreferrer">sui community</Link>
          </Typography>
        </Box>

        <Box width="100%" paddingTop={1}>
          {common.current.activeLoaded && 
              <ExplorerTreeView packagesTrigger={packagesTrigger}
                                packagesJson={workdirs[common.current.activeWorkdirIdx].workdirPackages} 
                                workdir={common.current.activeWorkdir}
                                workdirIdx={common.current.activeWorkdirIdx}/>
          }
        </Box>
        </>
  );
}