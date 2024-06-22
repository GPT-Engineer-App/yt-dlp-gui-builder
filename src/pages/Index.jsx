import { useState } from "react";
import { Container, VStack, Input, Button, Select, Progress, Text, Box, Image } from "@chakra-ui/react";
import { FaDownload, FaPlus } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const [urlList, setUrlList] = useState([]);
  const [format, setFormat] = useState("mp4");
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");
  const [preview, setPreview] = useState("");

  const handleAddUrl = () => {
    if (url) {
      setUrlList([...urlList, url]);
      setUrl("");
    }
  };

  const handleDownload = () => {
    // Placeholder for download logic
    setStatus("Downloading...");
    setProgress(50); // Simulate progress
    setTimeout(() => {
      setProgress(100);
      setStatus("Download Complete");
    }, 2000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Input
          placeholder="Enter YouTube URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button leftIcon={<FaPlus />} onClick={handleAddUrl}>
          Add URL
        </Button>
        <Box width="100%" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          {urlList.map((url, index) => (
            <Text key={index}>{url}</Text>
          ))}
        </Box>
        <Select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option value="mp4">MP4</option>
          <option value="mp3">MP3</option>
        </Select>
        <Button leftIcon={<FaDownload />} onClick={handleDownload}>
          Download
        </Button>
        <Progress value={progress} width="100%" />
        <Text>{status}</Text>
        {preview && <Image src={preview} alt="Video Preview" />}
      </VStack>
    </Container>
  );
};

export default Index;