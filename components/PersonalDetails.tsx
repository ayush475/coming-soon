'use client'

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function PersonalDetails() {
  return (
    <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-white mb-2">Roman Dangol</h2>
        <p className="text-gray-300 mb-4">Web Technology Student | BIT III</p>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
            <FaTwitter size={24} />
          </a>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Learn More</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>About John Doe</DialogTitle>
              <DialogDescription>
                John is a passionate 3rd year Computer Science student specializing in Web Technologies. 
                He's excited to showcase his final project for the Web Technology course at Acme University.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

