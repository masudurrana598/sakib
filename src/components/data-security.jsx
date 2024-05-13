import React, {useEffect, useRef, useState} from "react";
import pdfToText from 'react-pdftotext';
import {getFileContent, scrapData} from "../utils/apis";
import SendIcon from "@mui/icons-material/Send";
import { MicNone, InsertLink, AssignmentOutlined, CloudUpload, DeleteOutline, AttachFile, Link as LinkIcon } from "@mui/icons-material";
import { FaRegFilePdf, FaTrash, FaFileWord } from 'react-icons/fa';
import { AiOutlineFileText, AiOutlineFileWord  } from "react-icons/ai";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DataSecurity({ setStartProcessing, setData, setSourceType }) {
    const textArea = useRef();
    
const data = [
    { location: "USA (5)", status: "ok", device:'chrome-Windows', ip_address: "236.125.56.78", time: "2 minute ago" },
    { location: "USA (5)", status: "ok", device:'chrome-Windows', ip_address: "236.125.56.78", time: "2 minute ago" },
    { location: "USA (5)", status: "ok", device:'chrome-Windows', ip_address: "236.125.56.78", time: "2 minute ago" },
    { location: "USA (5)", status: "ok", device:'chrome-Windows', ip_address: "236.125.56.78", time: "2 minute ago" },
    { location: "USA (5)", status: "ok", device:'chrome-Windows', ip_address: "236.125.56.78", time: "2 minute ago" },
    { location: "USA (5)", status: "ok", device:'chrome-Windows', ip_address: "236.125.56.78", time: "2 minute ago" },
    { location: "USA (5)", status: "ok", device:'chrome-Windows', ip_address: "236.125.56.78", time: "2 minute ago" },
]

    
    return (
	 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Device</TableCell>
            <TableCell align="left">IP Address</TableCell>
            <TableCell align="left">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((val, key) => (
            <TableRow
              key={val.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {val.location}</TableCell>
              <TableCell align="left">{val.status}</TableCell>
              <TableCell align="left">{val.device}</TableCell>
              <TableCell align="left">{val.ip_address}</TableCell>
              <TableCell align="left">{val.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       )
}